import { FC, useEffect, useState } from 'react'

import { DevTool } from '@hookform/devtools'

import s from './pack.module.scss'

import noCover from '@/assets/illustrations/no-cover.svg'
import { ControlledCheckbox, ControlledTextField } from '@/components/controlled'
import { ControlledFileUploader } from '@/components/controlled/controlled-file-uploader'
import { PackFormType, usePackForm } from '@/components/forms/pack/use-pack-form.ts'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon/icon.tsx'
import { Typography } from '@/components/ui/typography'

type DefaultValuesProps = {
  name: string
  isPrivate: boolean
  cover?: string
}

type Props = {
  onSubmit: (data: FormData) => void
  defaultValues?: DefaultValuesProps
  onCancel: () => void
}

export const PackForm: FC<Props> = ({ onSubmit, defaultValues, onCancel }) => {
  const [downloaded, setDownloaded] = useState<string>(defaultValues?.cover || '')

  const values: PackFormType = {
    name: defaultValues?.name || '',
    isPrivate: defaultValues?.isPrivate || false,
  }

  const {
    watch,
    control,
    setValue,
    setError,
    clearErrors,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = usePackForm(values)

  const file = watch('cover')

  const fileIsDirty = dirtyFields.cover

  const coverError = errors.cover?.message

  useEffect(() => {
    if (file && !coverError && fileIsDirty) {
      const img = URL.createObjectURL(file)

      setDownloaded(img)
    }
  }, [file])

  const deleteCoverHandler = () => {
    if (coverError) {
      clearErrors('cover')
    }
    setValue('cover', null)
    setDownloaded('')
  }

  const sendHandler = (data: PackFormType) => {
    const form = new FormData()

    form.append('name', data.name)
    form.append('isPrivate', `${data.isPrivate}`)
    if (file === null) {
      form.append('cover', '')
    } else {
      if (fileIsDirty && data.cover) {
        form.append('cover', data.cover)
      }
    }

    onSubmit(form)
  }

  return (
    <form onSubmit={handleSubmit(sendHandler)} className={s.form}>
      <DevTool control={control} />
      <img src={downloaded || noCover} alt={'img'} className={s.image} />
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
          setError={setError}
          clearErrors={clearErrors}
          variant="secondary"
          fullWidth={!downloaded}
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
