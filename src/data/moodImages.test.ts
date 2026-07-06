import { describe, expect, it } from "vitest"
import { MOOD_IMAGES, MOOD_QUOTES, MoodLabel, toMoodLabel } from "./moodImages"

describe("toMoodLabel", () => {
  it("capitalizes each word of a lowercase mood", () => {
    expect(toMoodLabel("very happy")).toBe("Very Happy")
    expect(toMoodLabel("neutral")).toBe("Neutral")
  })

  it("leaves an already-capitalized label unchanged", () => {
    expect(toMoodLabel("Very Sad")).toBe("Very Sad")
  })
})

describe("MOOD_IMAGES / MOOD_QUOTES", () => {
  it("has an image and a quote for every mood label", () => {
    Object.values(MoodLabel).forEach((label) => {
      expect(MOOD_IMAGES[label]).toBeTruthy()
      expect(MOOD_QUOTES[label]).toBeTruthy()
    })
  })
})
