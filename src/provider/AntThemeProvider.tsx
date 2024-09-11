'use client'

import { ConfigProvider } from 'antd'
import { useTheme } from 'next-themes'
import { type ThemeProviderProps } from 'next-themes/dist/types'
import * as React from 'react'

export function AntThemeProvider({ children }: ThemeProviderProps) {
  const { theme } = useTheme()
  const [themeTokens, setThemeTokens] = React.useState({})
  React.useEffect(() => {
    const lightTokens = {
      colorBgContainer: '#fff',
      selectBg: '#fff',
      controlItemBgActive: '#f9f9f9',
      colorPrimaryBg: '#f1f1f2',
      colorInfoBg: '#dbdfe9',

      colorBgBase: '#fff',
      colorTextBase: '#080921',

      colorBorder: '#DBDFE9',
      colorBorderSecondary: '#DBDFE9',
      borderColor: '#DBDFE9',
    }
    const darkTokens = {
      colorBgContainer: '#080921',
      selectBg: '#080921',
      controlItemBgActive: '#00034f',
      colorPrimaryBg: '#00034f',
      colorInfoBg: '#00034f',

      colorBgBase: '#080921',
      colorTextBase: '#e9e9e9',

      colorBorder: '#2c2c2c',
      colorBorderSecondary: '#2c2c2c',
      borderColor: '#2c2c2c',
    }

    setThemeTokens(theme === 'light' ? lightTokens : darkTokens)
  }, [theme]) // Re-run the effect when the theme changes

  return <ConfigProvider theme={{ token: themeTokens }}>{children}</ConfigProvider>
}
