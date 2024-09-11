import { Input, InputProps } from 'antd'
import { SizeType } from 'antd/es/config-provider/SizeContext'

interface Props {
  width?: string
  inputProps: Omit<InputProps, 'size'> & { size?: SizeType }
  label: string
}

export function DbInput1({ label, width, inputProps }: Props) {
  return (
    <div className="flex gap-4 flex-col 2xl:flex-row 2xl:items-center">
      <div className={width}>
        <label className="text-sm text-skin-color-1" htmlFor={label.toLowerCase().split(' ').join('-')}>
          {label}
        </label>
      </div>
      <div className="w-full">
        <Input size="large" {...inputProps} />
      </div>
    </div>
  )
}
