'use client'
import { KTIcon } from '@/helper/icon'
import { useTheme } from 'next-themes'
import React from 'react'

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()
  return (
    <button id="btn-btnone" className="icon" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      <KTIcon iconName={theme === 'light' ? 'moon' : 'night-day'} />
    </button>
  )
}
