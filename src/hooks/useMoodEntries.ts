"use client"

import { useState, useEffect } from "react"
import { createClient } from "@/lib/supabase"

export type MoodEntry = {
  id: number
  created_at: string
  mood: string
  sleep_hours: number
  feelings: string[]
  note: string
}

const getCacheKey = (userId: string) => `mood-entries-cache-${userId}`

export const useMoodEntries = () => {
  const [entries, setEntries] = useState<MoodEntry[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [userId, setUserId] = useState<string | null>(null)

  useEffect(() => {
    const supabase = createClient()

    supabase.auth.getUser().then(({ data: { user } }) => {
      if (!user) {
        setLoading(false)
        return
      }

      setUserId(user.id)
      const cacheKey = getCacheKey(user.id)

      try {
        const cached = window.localStorage.getItem(cacheKey)
        if (cached) {
          setEntries(JSON.parse(cached))
          setLoading(false)
        }
      } catch {

      }

      fetch("/api/mood")
        .then((res) => res.json())
        .then((data) => {
          if (Array.isArray(data)) {
            setEntries(data)
            window.localStorage.setItem(cacheKey, JSON.stringify(data))
          } else {
            setError(data.error ?? "Failed to load entries")
          }
          setLoading(false)
        })
        .catch((err) => {
          setError(err.message)
          setLoading(false)
        })
    })
  }, [])

  const addEntry = async (entry: Omit<MoodEntry, "id" | "created_at">) => {
    const res = await fetch("/api/mood", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(entry),
    })
    const newEntry = await res.json()
    setEntries((prev) => {
      const next = [newEntry, ...prev]
      if (userId) {
        window.localStorage.setItem(getCacheKey(userId), JSON.stringify(next))
      }
      return next
    })
    return newEntry
  }

  return { entries, loading, error, addEntry }
}