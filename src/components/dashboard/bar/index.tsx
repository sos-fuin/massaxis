import React from 'react'
interface DbListProps {
  children?: React.ReactNode
  variant?: 'default' | 'primary' | 'secondary' | 'warning' | 'danger' | 'success'
  size?: 'xs' | 'sm' | 'lg' | 'xl' | 'xxl' | 'xxxl'
  className?: string
  gap?: 'gap-8px' | 'gap-10px' | 'gap-16px'
}
export function DBBar({ children, variant, size, className, gap }: DbListProps) {
  return <span className={`db-bar ${variant} ${size} ${className} ${gap}`}>{children}</span>
}
