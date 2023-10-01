import { Control, FieldPath, FieldValues } from 'react-hook-form'

import s from './controlled-preview-file-uploader.module.scss'

import noCover from '@/assets/illustrations/no-cover.svg'
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
}

export const ControlledPreviewFileUploader = <T extends FieldValues>(props: Props<T>) => {
  const { control, name, extraActions, preview, errorMessage, deleteCoverHandler } = props

  return (
    <div className={s.root}>
      <img src={preview ?? noCover} alt={'img'} className={s.image} />
      {errorMessage && (
        <Typography variant="caption" className={s.error}>
          {errorMessage}
        </Typography>
      )}
      <div className={s.previewControls}>
        {preview && (
          <Button type="button" variant="secondary" onClick={deleteCoverHandler}>
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
