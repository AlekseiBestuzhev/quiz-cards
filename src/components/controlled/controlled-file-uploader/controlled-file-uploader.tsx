import { ChangeEvent, useRef } from 'react'

import { clsx } from 'clsx'
import {
  Control,
  FieldPath,
  FieldValues,
  useController,
  UseFormSetError,
  UseFormClearErrors,
} from 'react-hook-form'
import { z } from 'zod'

import { Button, ButtonProps } from '@/components/ui/button'
import s from '@/components/ui/file-uploader/file-uploader.module.scss'
import { Icon } from '@/components/ui/icon/icon.tsx'

type Props<T extends FieldValues> = {
  control: Control<T>
  name: FieldPath<T>
  setError: UseFormSetError<{ name: string; isPrivate: boolean; cover?: File | undefined }>
  clearErrors: UseFormClearErrors<{ name: string; isPrivate: boolean; cover?: File | undefined }>
} & Omit<ButtonProps, 'type' | 'onClick'>

export const ControlledFileUploader = <T extends FieldValues>({
  name,
  control,
  children,
  setError,
  className,
  clearErrors,
  ...restProps
}: Props<T>) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const scheme = z
    .instanceof(File)
    .refine(file => file.size <= 1000000, `Max image size is 1MB.`)
    .refine(
      file => ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'].includes(file.type),
      'Only .jpg, .jpeg, .png and .webp formats are supported.'
    )
    .nullable()
    .optional()

  const {
    formState: { errors },
    field: { onChange },
  } = useController({
    name,
    control,
  })

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    const res = scheme.safeParse(file)

    if (res && 'data' in res) {
      if (errors) {
        clearErrors('cover')
      }
      onChange(file)
    }

    if (res && 'error' in res) {
      setError('cover', { type: 'custom', message: res.error.errors[0].message })
    }
  }

  const classes = clsx(s.wrapper, className)

  return (
    <>
      <Button
        onClick={() => inputRef?.current?.click()}
        className={classes}
        type="button"
        {...restProps}
      >
        {children ?? <Icon height={16} width={16} className={s.icon} name={'edit'} />}
      </Button>
      <input
        name={name}
        ref={inputRef}
        type="file"
        style={{ display: 'none' }}
        onChange={changeHandler}
      />
    </>
  )
}
