import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import ErrorText from "./ErrorText"

describe("ErrorText", () => {
  it("renders the error message and an accessible error icon", () => {
    render(<ErrorText text="Passwords do not match" />)

    expect(screen.getByText("Passwords do not match")).toBeInTheDocument()
    expect(screen.getByAltText("Error")).toBeInTheDocument()
  })
})
