import React from 'react'
interface DbListProps {
  children?: React.ReactNode
  variant?: 'default' | 'no-border' | 'dot-border' | string
}
export function DbList({ children, variant }: DbListProps) {
  return (
    <table className={`db-list ${variant}`}>
      <tbody>{children}</tbody>
    </table>
  )
}
