import { ChangeEvent } from 'react'

import { Control, FieldPath, FieldValues, useController } from 'react-hook-form'

import { ButtonProps } from '@/components/ui/button'
import { FileUploader } from '@/components/ui/file-uploader/file-uploader.tsx'

export type ControlledFileUploaderProps<T extends FieldValues> = {
  control: Control<T>
  name: FieldPath<T>
  extraActions?: () => void
} & Omit<ButtonProps, 'type' | 'onClick' | 'onChange'>

export const ControlledFileUploader = <T extends FieldValues>({
  name,
  control,
  extraActions,
  ...rest
}: ControlledFileUploaderProps<T>) => {
  const {
    field: { onChange },
  } = useController({
    name,
    control,
  })

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    onChange(file)
    extraActions?.()
    e.target.value = ''
  }

  return <FileUploader name={name} type="button" onChange={changeHandler} {...rest} />
}
