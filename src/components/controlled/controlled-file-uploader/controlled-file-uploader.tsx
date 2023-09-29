import { ChangeEvent, useRef } from 'react'

import { clsx } from 'clsx'
import { Control, FieldPath, FieldValues, useController } from 'react-hook-form'

import { Button, ButtonProps } from '@/components/ui/button'
import s from '@/components/ui/file-uploader/file-uploader.module.scss'
import { Icon } from '@/components/ui/icon/icon.tsx'

type Props<T extends FieldValues> = {
  control: Control<T>
  name: FieldPath<T>
  extraActions?: (inputName: string) => void
} & Omit<ButtonProps, 'type' | 'onClick'>

export const ControlledFileUploader = <T extends FieldValues>({
  name,
  control,
  children,
  className,
  extraActions,
  ...restProps
}: Props<T>) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const {
    field: { onChange },
  } = useController({
    name,
    control,
  })

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    onChange(file)
    extraActions?.(name)
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
