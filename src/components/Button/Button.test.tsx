import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"
import Button from "./Button"

describe("Button", () => {
  it("renders the given text and default type", () => {
    render(<Button text="Save" />)
    const button = screen.getByRole("button", { name: "Save" })
    expect(button).toHaveAttribute("type", "button")
  })

  it("calls onClick when clicked", async () => {
    const onClick = vi.fn()
    render(<Button text="Confirm" onClick={onClick} />)

    await userEvent.click(screen.getByRole("button", { name: "Confirm" }))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it("does not fire onClick when disabled", async () => {
    const onClick = vi.fn()
    render(<Button text="Confirm" onClick={onClick} disabled />)

    const button = screen.getByRole("button", { name: "Confirm" })
    expect(button).toBeDisabled()

    await userEvent.click(button)
    expect(onClick).not.toHaveBeenCalled()
  })

  it("merges the additional class with the base class", () => {
    render(<Button text="Submit" additionalClass="wide" type="submit" />)
    const button = screen.getByRole("button", { name: "Submit" })
    expect(button).toHaveClass("primary-button", "wide")
    expect(button).toHaveAttribute("type", "submit")
  })
})
