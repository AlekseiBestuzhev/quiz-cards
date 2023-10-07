import { FC } from 'react'

import s from './dialog.module.scss'

import { formatTextBr } from '@/common/utils'
import { Button } from '@/components/ui/button'
import { ModalWindow } from '@/components/ui/modal-window'
import { Typography } from '@/components/ui/typography'

type Props = {
  title: string
  description: string
  buttonText?: string
  open: boolean
  setOpen: (value: boolean) => void
  onConfirm: () => void
  splitLines?: boolean
}

export const Dialog: FC<Props> = ({
  title,
  description,
  buttonText,
  open,
  setOpen,
  onConfirm,
  splitLines,
}) => {
  const formattedDescription = splitLines ? formatTextBr(description) : description

  const onCancel = () => {
    setOpen(false)
  }

  return (
    <ModalWindow open={open} setOpen={setOpen} title={title}>
      <Typography>{formattedDescription}</Typography>
      <div className={s.buttons}>
        <Button variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
        <Button onClick={onConfirm}>{buttonText || 'Confirm'}</Button>
      </div>
    </ModalWindow>
  )
}
