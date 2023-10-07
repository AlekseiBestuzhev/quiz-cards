import { ChangeEvent, ComponentPropsWithoutRef, ElementType, ReactNode, useRef } from 'react'

import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon/icon.tsx'

type FileUploaderProps<T extends ElementType = 'button'> = {
  name: string
  as?: T
  accept?: string
  className?: string
  asProps?: T extends keyof JSX.IntrinsicElements ? JSX.IntrinsicElements[T] : any
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  children?: ReactNode
} & Omit<ComponentPropsWithoutRef<T>, 'onChange'>

export const FileUploader = <T extends ElementType = 'button'>(
  props: FileUploaderProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof FileUploaderProps<T>>
) => {
  const {
    name,
    onChange,
    accept = '',
    as: WrapperComponent = Button,
    asProps = { variant: 'secondary' },
    children,
    ...rest
  } = props

  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <>
      <WrapperComponent onClick={() => inputRef?.current?.click()} {...asProps} {...rest}>
        {children ?? <Icon height={16} width={16} name={'edit'} />}
      </WrapperComponent>
      <input
        ref={inputRef}
        name={name}
        type="file"
        style={{ display: 'none' }}
        onChange={onChange}
        accept={accept}
      />
    </>
  )
}
