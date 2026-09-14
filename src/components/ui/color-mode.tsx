"use client"

import type { IconButtonProps } from "@chakra-ui/react"
import { IconButton } from "@chakra-ui/react"
import * as React from "react"
import { LuMoon, LuSun } from "react-icons/lu"

export type ColorModeProviderProps = { children?: React.ReactNode }

export function ColorModeProvider(props: ColorModeProviderProps) {
  return <>{props.children}</>
}

export type ColorMode = "light" | "dark"

export interface UseColorModeReturn {
  colorMode: ColorMode
  setColorMode: (colorMode: ColorMode) => void
  toggleColorMode: () => void
}

export function useColorMode(): UseColorModeReturn {
  // Start with a deterministic value during SSR and the initial client render
  const [colorMode, setColorModeState] = React.useState<ColorMode>("light")

  // On mount, read the stored preference and apply it
  React.useEffect(() => {
    try {
      const stored = window.localStorage.getItem("color-mode") as ColorMode | null
      if (stored) {
        Promise.resolve().then(() => setColorModeState(stored))
        document.documentElement.classList.toggle("dark", stored === "dark")
        return
      }
      const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
      const initial = prefersDark ? "dark" : "light"
      Promise.resolve().then(() => setColorModeState(initial))
      document.documentElement.classList.toggle("dark", initial === "dark")
    } catch {
      // ignore
    }
  }, [])

  // Persist changes
  React.useEffect(() => {
    try {
      window.localStorage.setItem("color-mode", colorMode)
      document.documentElement.classList.toggle("dark", colorMode === "dark")
    } catch {}
  }, [colorMode])

  const setColorMode = (mode: ColorMode) => setColorModeState(mode)
  const toggleColorMode = () => setColorModeState((m) => (m === "dark" ? "light" : "dark"))

  return { colorMode, setColorMode, toggleColorMode }
}

export function useColorModeValue<T>(light: T, dark: T) {
  const { colorMode } = useColorMode()
  return colorMode === "dark" ? dark : light
}

export function ColorModeIcon() {
  const { colorMode } = useColorMode()
  return colorMode === "dark" ? <LuMoon /> : <LuSun />
}

type ColorModeButtonProps = Omit<IconButtonProps, "aria-label">

export const ColorModeButton = React.forwardRef<
  HTMLButtonElement,
  ColorModeButtonProps
>(function ColorModeButton(props, ref) {
  const { toggleColorMode } = useColorMode()
  return (
    <IconButton
      onClick={toggleColorMode}
      variant="ghost"
      aria-label="Toggle color mode"
      size="sm"
      ref={ref}
      {...props}
    >
      <ColorModeIcon />
    </IconButton>
  )
})

export const LightMode = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(function LightMode(props, ref) {
  return (
    <span className="chakra-theme light" ref={ref} {...props} />
  )
})

export const DarkMode = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(function DarkMode(props, ref) {
  return (
    <span className="chakra-theme dark" ref={ref} {...props} />
  )
})
