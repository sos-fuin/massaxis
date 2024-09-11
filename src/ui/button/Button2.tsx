import React from 'react'

export interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
}

export const Button2 = ({ children, ...props }: ButtonProps) => {
  return (
    <button type="button" {...props}>
      {children}
    </button>
  )
}
