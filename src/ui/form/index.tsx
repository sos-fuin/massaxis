'use client'
import { InputHTMLAttributes } from 'react'
import './form.scss'
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'outline' | 'base' | 'gradient'
  // You can define custom props here if needed
}

export function Input1({ variant, ...props }: InputProps) {
  return (
    <div className="form-box1">
      <input type="text" className={`form-input1 ${variant}`} {...props} />
    </div>
  )
}
