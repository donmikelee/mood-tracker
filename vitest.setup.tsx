import "@testing-library/jest-dom/vitest"
import { vi } from "vitest"
import type { ImgHTMLAttributes } from "react"

vi.mock("next/image", () => ({
  __esModule: true,
  default: ({ src, alt, ...rest }: ImgHTMLAttributes<HTMLImageElement> & { src: string | { src: string } }) => {
    const resolvedSrc = typeof src === "string" ? src : src?.src
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={resolvedSrc} alt={alt} {...rest} />
  },
}))

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    refresh: vi.fn(),
  }),
}))
