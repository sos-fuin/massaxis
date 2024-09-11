import React from 'react'

interface dbBasicCardProps {
  children?: React.ReactNode
  className?: 'primary' | 'success' | 'warning' | 'danger'
  variant?: 'v1' | 'v2' | 'v3'
  size?: 'sm' | 'md' | 'lg'
}
export function DbBadge({ children, className, variant, size }: dbBasicCardProps) {
  return <span className={`db-badge ${className} ${variant} ${size}`}> {children}</span>
}
