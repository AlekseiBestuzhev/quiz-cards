import { FC, useState } from 'react'

import s from './pack.module.scss'

import noCover from '@/assets/illustrations/no-cover.svg'
import { ControlledCheckbox, ControlledTextField } from '@/components/controlled'
import { ControlledFileUploader } from '@/components/controlled/controlled-file-uploader'
import { PackFormType, usePackForm } from '@/components/forms/pack/use-pack-form.ts'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon/icon.tsx'
import { Typography } from '@/components/ui/typography'

type PackFormDV = {
  cover: string | null
} & Pick<PackFormType, 'name' | 'isPrivate'>

type Props = {
  onSubmit: (data: FormData) => void
  defaultValues?: PackFormDV
  onCancel: () => void
}

export const PackForm: FC<Props> = ({ onSubmit, defaultValues, onCancel }) => {
  const [downloaded, setDownloaded] = useState<string | null>(defaultValues?.cover || null)

  const [coverError, setCoverError] = useState<string | null>(null)

  const values: PackFormType = {
    name: defaultValues?.name || '',
    isPrivate: defaultValues?.isPrivate || false,
  }

  const { watch, control, trigger, resetField, setValue, handleSubmit, getFieldState } =
    usePackForm(values)

  const fileIsDirty = getFieldState('cover').isDirty

  const file = watch('cover')

  const deleteCoverHandler = () => {
    if (coverError) {
      setCoverError(null)
    }
    setValue('cover', null)
    setDownloaded(null)
  }

  const extraActions = async () => {
    const success = await trigger('cover')

    const { error } = getFieldState('cover')

    const file = watch('cover')

    if (!success && error?.message) {
      setCoverError(error.message)

      resetField('cover')
    }

    if (file) {
      const badCase = defaultValues?.cover ?? null
      const img = success ? URL.createObjectURL(file) : badCase

      setDownloaded(img)

      if (coverError && !error?.message) {
        setCoverError(null)
      }
    }
  }

  const sendHandler = (data: PackFormType) => {
    const form = new FormData()

    form.append('name', data.name)
    form.append('isPrivate', `${data.isPrivate}`)

    if (file === null) {
      form.append('cover', '')
    } else if (fileIsDirty && data.cover) {
      form.append('cover', data.cover)
    }

    onSubmit(form)
  }

  return (
    <form onSubmit={handleSubmit(sendHandler)} className={s.form}>
      <img src={downloaded ?? noCover} alt={'img'} className={s.image} />
      {coverError && (
        <Typography variant="caption" className={s.error}>
          {coverError}
        </Typography>
      )}
      <div className={s.imageControls}>
        {downloaded && (
          <Button type="button" variant="secondary" onClick={deleteCoverHandler}>
            <Icon name="trash-bin" className={s.imgIcon} width={18} height={18} />
            Delete Cover
          </Button>
        )}
        <ControlledFileUploader
          control={control}
          name="cover"
          variant="secondary"
          fullWidth={!downloaded}
          extraActions={extraActions}
        >
          <Icon name="image" className={s.imgIcon} width={20} height={20} />
          Change Cover
        </ControlledFileUploader>
      </div>
      <ControlledTextField control={control} name={'name'} label="Name Pack" />
      <ControlledCheckbox control={control} name={'isPrivate'} label="Private Pack" />
      <div className={s.controls}>
        <Button type="button" variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
        <Button>Send</Button>
      </div>
    </form>
  )
}
