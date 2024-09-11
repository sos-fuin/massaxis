import React from 'react'

interface DbTextProps {
  children: React.ReactNode
  className?: string[] | string
}
export function DbText({ children, className }: DbTextProps) {
  const classNames = Array.isArray(className) ? className.join(' ') : className

  return <p className={classNames}>{children}</p>
}
