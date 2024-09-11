'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { type ThemeProviderProps } from 'next-themes/dist/types'
import * as React from 'react'
import { AntThemeProvider } from './AntThemeProvider'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // Function to get CSS variable value

  return (
    <NextThemesProvider {...props}>
      <AntThemeProvider>{children}</AntThemeProvider>
    </NextThemesProvider>
  )
}
