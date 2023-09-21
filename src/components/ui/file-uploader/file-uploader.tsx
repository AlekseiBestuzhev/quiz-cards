import { ChangeEvent, ComponentPropsWithoutRef, ElementType, ReactNode, useRef } from 'react'

import { clsx } from 'clsx'

import s from './file-uploader.module.scss'

import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon/icon.tsx'

type FileUploaderProps<T extends ElementType = 'button'> = {
  update: (formData: FormData) => void
  className?: string
  validate: (file: File) => boolean
  accept?: string
  as?: T
  asProps?: T extends keyof JSX.IntrinsicElements ? JSX.IntrinsicElements[T] : any
  children?: ReactNode
} & ComponentPropsWithoutRef<T>

export const FileUploader = <T extends ElementType = 'button'>(
  props: FileUploaderProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof FileUploaderProps<T>>
) => {
  const {
    update,
    className,
    validate,
    accept = '',
    as: WrapperComponent = Button,
    asProps = { variant: 'secondary' },
    children,
    ...rest
  } = props

  const inputRef = useRef<HTMLInputElement>(null)

  const handleFileSelected = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0]

      if (validate(file)) {
        const formData = new FormData()

        formData.append('avatar', event.target.files[0])
        update(formData)
      }
    }
  }

  const classes = {
    wrapper: clsx(s.wrapper, className),
  }

  return (
    <>
      <WrapperComponent
        onClick={() => inputRef?.current?.click()}
        className={classes.wrapper}
        {...asProps}
        {...rest}
      >
        {children ?? <Icon height={16} width={16} className={s.icon} name={'edit'} />}
      </WrapperComponent>
      <input
        ref={inputRef}
        type="file"
        style={{ display: 'none' }}
        onChange={handleFileSelected}
        accept={accept}
      />
    </>
  )
}
