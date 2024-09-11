'use client'
import { Input } from 'antd'
import { SizeType } from 'antd/es/config-provider/SizeContext'
import { TextAreaProps } from 'antd/es/input'
import Label from '../label'

const { TextArea } = Input
interface Props {
  inputProps: Omit<TextAreaProps, 'size'> & { size?: SizeType }
  label: string
}

export function DbTextarea({ label, inputProps }: Props) {
  return (
    <div className="flex gap-3 flex-col">
      <div>
        <Label label={label} />
      </div>
      <div className="w-full">
        <TextArea {...inputProps} />
      </div>
    </div>
  )
}
