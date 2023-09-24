import { FC, useEffect, useState } from 'react'

import s from './pack.module.scss'

import noCover from '@/assets/illustrations/no-cover.svg'
import { ControlledCheckbox, ControlledTextField } from '@/components/controlled'
import { ControlledFileUploader } from '@/components/controlled/controlled-file-uploader'
import { PackFormType, usePackForm } from '@/components/forms/pack/use-pack-form.ts'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'

type Props = {
  onSubmit: (data: FormData) => void
  defaultValues?: PackFormType
  onCancel: () => void
}

export const PackForm: FC<Props> = ({ onSubmit, defaultValues, onCancel }) => {
  const [downloaded, setDownloaded] = useState<string>('')

  const values: PackFormType = defaultValues || {
    name: '',
    isPrivate: false,
  }

  const {
    watch,
    control,
    setError,
    resetField,
    clearErrors,
    handleSubmit,
    formState: { errors },
  } = usePackForm(values)

  const file = watch('cover')

  const coverError = errors.cover?.message

  useEffect(() => {
    if (coverError) {
      resetField('cover', { keepError: true })
      setDownloaded('')
    }

    if (file && !coverError) {
      const img = URL.createObjectURL(file)

      setDownloaded(img)
    }
  }, [file, coverError])

  const sendHandler = (data: PackFormType) => {
    const form = new FormData()

    form.append('name', data.name)
    form.append('isPrivate', `${data.isPrivate}`)
    data.cover && form.append('cover', data.cover)

    onSubmit(form)
  }

  return (
    <form onSubmit={handleSubmit(sendHandler)} className={s.form}>
      <img src={downloaded || noCover} alt={'img'} className={s.image} />
      {coverError && (
        <Typography variant="caption" className={s.error}>
          {coverError}
        </Typography>
      )}
      <ControlledFileUploader
        control={control}
        name="cover"
        setError={setError}
        clearErrors={clearErrors}
        variant="secondary"
        fullWidth
      >
        Choose cover
      </ControlledFileUploader>
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
