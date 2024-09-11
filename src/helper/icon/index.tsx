'use client'
import React, { useEffect, useState } from 'react'
import icons, { Props } from './icons'
const DefaultConfig = {
  main: {
    iconType: 'duotone',
  },
}

// form file REACT_APP_BASE_LAYOUT_CONFIG_KEY = metronic-react-demo1-8150
const LAYOUT_CONFIG_KEY = process.env.REACT_APP_BASE_LAYOUT_CONFIG_KEY || 'LayoutConfig'
export const getLayoutFromLocalStorage = () => {
  const ls = typeof window !== 'undefined' && localStorage.getItem(LAYOUT_CONFIG_KEY)
  if (ls) {
    try {
      return JSON.parse(ls)
    } catch (er) {
      // console.error(er)
    }
  }
  return DefaultConfig
}

const KTIcon: React.FC<Props> = ({ className = '', iconType, iconName }) => {
  const [resolvedIconType, setResolvedIconType] = useState(iconType)

  useEffect(() => {
    if (!iconType) {
      const layout = getLayoutFromLocalStorage()
      setResolvedIconType(layout?.main?.iconType)
    }
  }, [iconType])

  if (!resolvedIconType) return null

  return (
    <span className={`ki-${resolvedIconType} ki-${iconName}${className && ' ' + className}`}>
      {resolvedIconType === 'duotone' &&
        [...Array(icons[iconName])].map((_, i) => (
          <span key={`${resolvedIconType}-${iconName}-${className}-path-${i + 1}`} className={`path${i + 1}`}></span>
        ))}
    </span>
  )
}

export { KTIcon }
