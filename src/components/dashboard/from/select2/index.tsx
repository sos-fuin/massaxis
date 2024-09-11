import { Select, SelectProps } from 'antd'

interface Props {
  inputProps: Omit<SelectProps, 'size'>
  label: string
  width?: string
}

export function DbSelect2({ label, width, inputProps }: Props) {
  return (
    <div className="flex gap-4 items-center">
      <div className={width}>
        <label className="text-sm text-skin-color-1" htmlFor={label.toLowerCase().split(' ').join('-')}>
          {label}
        </label>
      </div>
      <div className="w-full">
        <Select size="large" style={{ width: '100%' }} {...inputProps} />
      </div>
    </div>
  )
}
