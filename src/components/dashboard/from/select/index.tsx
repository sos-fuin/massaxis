import { Select, SelectProps } from 'antd'
import Label from '../label'

interface Props {
  inputProps: Omit<SelectProps, 'size'>
  label: string
}

export function DbSelect({ label, inputProps }: Props) {
  return (
    <div className="flex gap-3 flex-col w-full">
      <div>
        <Label label={label} />
      </div>
      <div className="w-full">
        <Select size="large" style={{ width: '100%' }} {...inputProps} />
      </div>
    </div>
  )
}
