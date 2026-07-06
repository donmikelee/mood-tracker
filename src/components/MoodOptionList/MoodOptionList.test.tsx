import { act, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { beforeEach, describe, expect, it } from "vitest"
import MoodOptionList from "./MoodOptionList"
import { useModalStore } from "../../store/useModalStore"

beforeEach(() => {
  act(() => {
    useModalStore.getState().reset()
  })
})

describe("MoodOptionList", () => {
  it("renders every mood option", () => {
    render(<MoodOptionList />)

    expect(screen.getByText("Very Happy")).toBeInTheDocument()
    expect(screen.getByText("Happy")).toBeInTheDocument()
    expect(screen.getByText("Neutral")).toBeInTheDocument()
    expect(screen.getByText("Sad")).toBeInTheDocument()
    expect(screen.getByText("Very Sad")).toBeInTheDocument()
  })

  it("selects a mood option and logs it to the shared store", async () => {
    render(<MoodOptionList />)

    await userEvent.click(screen.getByText("Happy"))

    expect(screen.getByText("Happy").closest("li")).toHaveClass("selected")
    expect(useModalStore.getState().loggedMood).toBe("Happy")
  })

  it("toggles the selection off when the same option is clicked again", async () => {
    render(<MoodOptionList />)

    const option = screen.getByText("Neutral")
    await userEvent.click(option)
    expect(option.closest("li")).toHaveClass("selected")

    await userEvent.click(option)
    expect(option.closest("li")).not.toHaveClass("selected")
  })
})
