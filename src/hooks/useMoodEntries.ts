"use client"

import { useState, useEffect } from "react"

export type MoodEntry = {
  id: number
  created_at: string
  mood: string
  sleep_hours: number
  feelings: string[]
  note: string
}

export const useMoodEntries = () => {
  const [entries, setEntries] = useState<MoodEntry[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch("/api/mood")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setEntries(data)
        } else {
          setError(data.error ?? "Failed to load entries")
        }
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  const addEntry = async (entry: Omit<MoodEntry, "id" | "created_at">) => {
    const res = await fetch("/api/mood", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(entry),
    })
    const newEntry = await res.json()
    setEntries((prev) => [newEntry, ...prev])
    return newEntry
  }

  return { entries, loading, error, addEntry }
}