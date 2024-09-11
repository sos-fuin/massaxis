import React from 'react'

export default function Label({ label }: { label: string }) {
  return (
    <label className="text-sm text-skin-color-2 font-bold" htmlFor={label.toLowerCase().split(' ').join('-')}>
      {label}
    </label>
  )
}
