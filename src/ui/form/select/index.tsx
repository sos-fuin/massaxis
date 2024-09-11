'use client'
import { Select as S } from 'antd'
interface InputProps {
  handleChange: () => void
  defaultValue?: string
  options?: {
    value: string
    label: string
    disabled?: boolean
  }[]
}
export function Select({ handleChange, defaultValue, options }: InputProps) {
  return <S defaultValue={defaultValue} style={{ width: '100%' }} onChange={handleChange} options={options} />
}
