import { renderHook } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { useMoodImage } from "./useMoodImage"
import { useMoodQuote } from "./useMoodQuote"
import { MOOD_IMAGES, MOOD_QUOTES } from "../data/moodImages"

describe("useMoodImage", () => {
  it("resolves the image for a known mood, case-insensitively", () => {
    const { result } = renderHook(() => useMoodImage("happy"))
    expect(result.current).toBe(MOOD_IMAGES.Happy)
  })

  it("returns null for an unknown mood", () => {
    const { result } = renderHook(() => useMoodImage("furious"))
    expect(result.current).toBeNull()
  })
})

describe("useMoodQuote", () => {
  it("resolves the quote for a known mood", () => {
    const { result } = renderHook(() => useMoodQuote("very sad"))
    expect(result.current).toBe(MOOD_QUOTES["Very Sad"])
  })

  it("returns null for an unknown mood", () => {
    const { result } = renderHook(() => useMoodQuote("furious"))
    expect(result.current).toBeNull()
  })
})
