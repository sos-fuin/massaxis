import { Input, InputProps } from 'antd'
import { SizeType } from 'antd/es/config-provider/SizeContext'
import Label from '../label'

interface Props {
  inputProps: Omit<InputProps, 'size'> & { size?: SizeType }
  label: string
}

export function DbInput2({ label, inputProps }: Props) {
  return (
    <div className="flex gap-3 flex-col w-full">
      <div>
        <Label label={label} />
      </div>
      <div className="w-full">
        <Input size="large" {...inputProps} />
      </div>
    </div>
  )
}
