import { describe, expect, it } from "vitest"
import { getSleepRangeLabel } from "./sleepHours"

describe("getSleepRangeLabel", () => {
  it("maps hours to the matching range label", () => {
    expect(getSleepRangeLabel(9)).toBe("9+")
    expect(getSleepRangeLabel(7)).toBe("7 - 8")
    expect(getSleepRangeLabel(5)).toBe("5 - 6")
    expect(getSleepRangeLabel(3)).toBe("3 - 4")
    expect(getSleepRangeLabel(0)).toBe("0 - 2")
  })

  it("falls back to the raw hours when no range matches", () => {
    expect(getSleepRangeLabel(6)).toBe("6")
  })
})
