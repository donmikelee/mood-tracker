import { act, renderHook } from "@testing-library/react"
import { beforeEach, describe, expect, it } from "vitest"
import { useButtonUnlocker } from "./useButtonUnlocker"
import { useModalStore } from "../store/useModalStore"

beforeEach(() => {
  act(() => {
    useModalStore.getState().reset()
  })
})

describe("useButtonUnlocker", () => {
  it("disables the button on the mood step until a mood is logged", () => {
    const { result } = renderHook(() => useButtonUnlocker())
    expect(result.current.getIsButtonDisabled()).toBe(true)

    act(() => {
      useModalStore.getState().setLoggedMood("Happy")
    })
    const { result: afterMood } = renderHook(() => useButtonUnlocker())
    expect(afterMood.current.getIsButtonDisabled()).toBe(false)
  })

  it("disables the feelings step until at least one feeling is logged", () => {
    act(() => {
      useModalStore.getState().setStep(1)
    })
    const { result } = renderHook(() => useButtonUnlocker())
    expect(result.current.getIsButtonDisabled()).toBe(true)

    act(() => {
      useModalStore.getState().setLoggedFeelings(["Grateful"])
    })
    const { result: afterFeelings } = renderHook(() => useButtonUnlocker())
    expect(afterFeelings.current.getIsButtonDisabled()).toBe(false)
  })

  it("disables the reflection step until the note is non-empty", () => {
    act(() => {
      useModalStore.getState().setStep(2)
      useModalStore.getState().setLoggedText("   ")
    })
    const { result } = renderHook(() => useButtonUnlocker())
    expect(result.current.getIsButtonDisabled()).toBe(true)

    act(() => {
      useModalStore.getState().setLoggedText("Had a good day")
    })
    const { result: afterText } = renderHook(() => useButtonUnlocker())
    expect(afterText.current.getIsButtonDisabled()).toBe(false)
  })

  it("disables the sleep step until sleep hours are logged", () => {
    act(() => {
      useModalStore.getState().setStep(3)
    })
    const { result } = renderHook(() => useButtonUnlocker())
    expect(result.current.getIsButtonDisabled()).toBe(true)

    act(() => {
      useModalStore.getState().setLoggedSleepHours("7 - 8")
    })
    const { result: afterSleep } = renderHook(() => useButtonUnlocker())
    expect(afterSleep.current.getIsButtonDisabled()).toBe(false)
  })

  it("never disables the button on steps beyond the wizard", () => {
    act(() => {
      useModalStore.getState().setStep(4)
    })
    const { result } = renderHook(() => useButtonUnlocker())
    expect(result.current.getIsButtonDisabled()).toBe(false)
  })
})
