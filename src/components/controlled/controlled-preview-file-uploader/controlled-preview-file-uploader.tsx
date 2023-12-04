import { useState } from 'react'

import { clsx } from 'clsx'
import { Control, FieldPath, FieldValues } from 'react-hook-form'

import s from './controlled-preview-file-uploader.module.scss'

import noCover from '@/assets/images/default-image.jpg'
import { ControlledFileUploader } from '@/components/controlled/controlled-file-uploader'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon/icon.tsx'
import { Typography } from '@/components/ui/typography'

type Props<T extends FieldValues> = {
  control: Control<T>
  name: FieldPath<T>
  extraActions?: () => void
  preview: string | null
  errorMessage: string | null
  deleteCoverHandler: () => void
  displayInlineError?: boolean
}

export const ControlledPreviewFileUploader = <T extends FieldValues>(props: Props<T>) => {
  const {
    control,
    name,
    extraActions,
    preview,
    errorMessage,
    deleteCoverHandler,
    displayInlineError = false,
  } = props

  const [open, setOpen] = useState(false)

  const imgClasses = clsx(s.image, preview && s.hover, open && s.open)

  const onClickHandler = () => {
    if (preview) {
      setOpen(prevState => !prevState)
    }
  }

  const deleteHandler = () => {
    deleteCoverHandler()
    if (open) {
      setOpen(false)
    }
  }

  return (
    <div className={s.root}>
      <img src={preview ?? noCover} alt={'img'} className={imgClasses} onClick={onClickHandler} />
      {displayInlineError && errorMessage && (
        <Typography variant="caption" className={s.error}>
          {errorMessage}
        </Typography>
      )}
      <div className={s.previewControls}>
        {preview && (
          <Button type="button" variant="secondary" onClick={deleteHandler}>
            <Icon name="trash-bin" className={s.imgIcon} width={18} height={18} />
            Delete Cover
          </Button>
        )}
        <ControlledFileUploader
          control={control}
          name={name}
          variant="secondary"
          extraActions={extraActions}
          fullWidth={!preview}
        >
          <Icon name="image" className={s.imgIcon} width={20} height={20} />
          Change Cover
        </ControlledFileUploader>
      </div>
    </div>
  )
}
