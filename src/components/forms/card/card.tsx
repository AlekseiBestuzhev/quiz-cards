import { FC, useState } from 'react'

import { toast } from 'react-toastify'

import s from './card.module.scss'

import { ControlledPreviewFileUploader, ControlledTextField } from '@/components/controlled'
import { CardFormType, useCardForm } from '@/components/forms/card/use-card-form.ts'
import { usePreviewErrorData } from '@/components/forms/card/use-preview-error-data.ts'
import { Button } from '@/components/ui/button'
import { Select } from '@/components/ui/select'
import { Card } from '@/features/cards/services'

const options = [
  { label: 'Text', value: 'text' },
  { label: 'Picture', value: 'picture' },
]

export type CardPropsDV = Pick<Card, 'question' | 'questionImg' | 'answer' | 'answerImg'>

type Props = {
  onSubmit: (data: any) => void
  onCancel: () => void
  defaultValues?: CardPropsDV
}

export const CardForm: FC<Props> = ({ onSubmit, onCancel, defaultValues }) => {
  const { errorData, previewData, isAnyPictureExist } = usePreviewErrorData(defaultValues)

  const [format, setFormat] = useState(isAnyPictureExist ? 'picture' : 'text')
  const withPicture = format === 'picture'

  const values = {
    question: defaultValues?.question || '',
    answer: defaultValues?.answer || '',
  }

  const { control, setValue, watch, resetField, getFieldState, trigger, handleSubmit } =
    useCardForm(values)

  const questionFile = watch('questionImg')
  const answerFile = watch('answerImg')

  const questionImgIsDirty = getFieldState('questionImg').isDirty
  const answerImgIsDirty = getFieldState('answerImg').isDirty

  const extraActions = (name: 'questionImg' | 'answerImg') => async () => {
    const success = await trigger(name)
    const { error } = getFieldState(name)
    const file = watch(name)

    if (!success && error?.message) {
      toast.error(error.message, { containerId: 'modal' })
      errorData[name].set(error.message)
      resetField(name)
    }

    if (file) {
      const badCase = defaultValues?.[name] ?? null
      const img = success ? URL.createObjectURL(file) : badCase

      previewData[name].set(img)

      if (errorData[name].text && !error?.message) {
        errorData[name].set(null)
      }
    }
  }

  const deleteCoverHandler = (name: 'questionImg' | 'answerImg') => () => {
    if (errorData[name].text) {
      errorData[name].set(null)
    }
    toast.warning('You deleted cover', { containerId: 'modal' })
    setValue(name, null)
    previewData[name].set(null)
  }

  const sendHandler = (data: CardFormType) => {
    const form = new FormData()

    form.append('question', data.question)
    form.append('answer', data.answer)

    if (withPicture) {
      if (questionFile === null) {
        form.append('questionImg', '')
      } else if (questionImgIsDirty && data.questionImg) {
        form.append('questionImg', data.questionImg)
      }

      if (answerFile === null) {
        form.append('answerImg', '')
      } else if (answerImgIsDirty && data.answerImg) {
        form.append('answerImg', data.answerImg)
      }
    }

    onSubmit(form)
  }

  return (
    <form onSubmit={handleSubmit(sendHandler)} className={s.root}>
      <Select
        options={options}
        label="Choose A Question Format"
        value={format}
        onValueChange={setFormat}
      />
      <ControlledTextField control={control} name="question" label="Question" />
      {withPicture && (
        <ControlledPreviewFileUploader
          preview={previewData.questionImg.picture}
          errorMessage={errorData.questionImg.text}
          deleteCoverHandler={deleteCoverHandler('questionImg')}
          extraActions={extraActions('questionImg')}
          control={control}
          name="questionImg"
        />
      )}
      <ControlledTextField control={control} name="answer" label="Answer" />
      {withPicture && (
        <ControlledPreviewFileUploader
          preview={previewData.answerImg.picture}
          errorMessage={errorData.answerImg.text}
          deleteCoverHandler={deleteCoverHandler('answerImg')}
          extraActions={extraActions('answerImg')}
          control={control}
          name="answerImg"
        />
      )}
      <div className={s.controls}>
        <Button variant="secondary" type="button" onClick={onCancel}>
          Cancel
        </Button>
        <Button>{defaultValues ? 'Save Changes' : 'Add New Card'}</Button>
      </div>
    </form>
  )
}
