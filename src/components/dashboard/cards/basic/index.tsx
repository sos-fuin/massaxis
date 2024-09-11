import React from 'react'

interface dbBasicCardProps {
  children?: React.ReactNode
  header?: React.ReactNode
}
export function DBCard({ children, header }: dbBasicCardProps) {
  return (
    <div className="db-card">
      {header && <div className="db-card-header">{header}</div>}
      {children && <div className="db-card-body">{children}</div>}
    </div>
  )
}
