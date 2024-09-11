import React from 'react'
function Primary({ children, ...rest }: { children: React.ReactNode }) {
  return (
    <button {...rest} className="ms-btn-primary">
      {children}
    </button>
  )
}

function Outline({ children, ...rest }: { children: React.ReactNode; rest?: any }) {
  return (
    <button {...rest} className="ms-btn-outline">
      {children}
    </button>
  )
}

export const Button = {
  Primary,
  Outline,
}
