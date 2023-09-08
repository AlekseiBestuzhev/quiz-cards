import { Control, FieldPath, FieldValues, useController } from 'react-hook-form'

import { Select, SelectPropsType } from '@/components/ui/select'

type Props<T extends FieldValues> = {
  control: Control<T>
  name: FieldPath<T>
} & Omit<SelectPropsType, 'onValueChange' | 'value'>

export const ControlledSelect = <T extends FieldValues>({ name, control, ...rest }: Props<T>) => {
  const {
    field: { onChange, value },
  } = useController({
    name,
    control,
  })

  return <Select value={value} onValueChange={onChange} {...rest} />
}
