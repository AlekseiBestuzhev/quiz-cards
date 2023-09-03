import { Control, FieldPath, FieldValues, useController } from 'react-hook-form'

import { TextField, TextFieldProps } from '@/components/ui/text-field'

type Props<T extends FieldValues> = {
  control: Control<T>
  name: FieldPath<T>
} & Omit<TextFieldProps, 'onChange' | 'value'>

export const ControlledTextField = <T extends FieldValues>({
  name,
  control,
  ...rest
}: Props<T>) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
  })

  return <TextField errorMessage={error?.message} {...field} {...rest} />
}
