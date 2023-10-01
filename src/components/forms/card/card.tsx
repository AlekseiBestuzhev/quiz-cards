import { FC, useState } from 'react'

import { DevTool } from '@hookform/devtools'

import s from './card.module.scss'

import noCover from '@/assets/illustrations/no-cover.svg'
import { ControlledTextField } from '@/components/controlled'
import { ControlledFileUploader } from '@/components/controlled/controlled-file-uploader'
import { CardFormType, useCardForm } from '@/components/forms/card/use-card-form.ts'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon/icon.tsx'
import { Select } from '@/components/ui/select'
import { Typography } from '@/components/ui/typography'

type CardPropsDV = {
  question: string
  answer: string
  questionImg: string | null
  answerImg: string | null
}

type Props = {
  onSubmit: (data: any) => void
  onCancel: () => void
  defaultValues?: CardPropsDV
}

export const CardForm: FC<Props> = ({ onSubmit, onCancel, defaultValues }) => {
  const [questionImgUpd, setQuestionImgUpd] = useState(defaultValues?.questionImg || '')
  const [answerImgUpd, setAnswerImgUpd] = useState(defaultValues?.answerImg || '')

  const [answerImgError, setAnswerImgError] = useState('')
  const [questionImgError, setQuestionImgError] = useState('')

  const isAnyPictureExist = defaultValues?.questionImg || defaultValues?.answerImg

  const [format, setFormat] = useState(isAnyPictureExist ? 'picture' : 'text')

  const withPicture = format === 'picture'

  const values = {
    question: defaultValues?.question || '',
    answer: defaultValues?.answer || '',
  }

  const options = [
    { label: 'Text', value: 'text' },
    { label: 'Picture', value: 'picture' },
  ]

  const { control, watch, resetField, getFieldState, trigger, handleSubmit } = useCardForm(values)

  const questionImgIsDirty = getFieldState('questionImg').isDirty
  const answerImgIsDirty = getFieldState('answerImg').isDirty

  const extraActions = async (inputName: string) => {
    const name = inputName as 'questionImg' | 'answerImg'

    const success = await trigger(name)

    const { error } = getFieldState(name)

    const file = watch(name)

    if (!success && error?.message) {
      if (name === 'questionImg') {
        setQuestionImgError(error.message)
      } else {
        setAnswerImgError(error.message)
      }

      resetField(name)
    }

    if (file) {
      const badCase = defaultValues?.[name] || ''
      const img = success ? URL.createObjectURL(file) : badCase

      if (name === 'questionImg') {
        setQuestionImgUpd(img)
        if (questionImgError && !error?.message) setQuestionImgError('')
      } else {
        setAnswerImgUpd(img)
        if (answerImgError && !error?.message) setQuestionImgError('')
      }
    }
  }

  const sendHandler = (data: CardFormType) => {
    const form = new FormData()

    form.append('question', data.question)
    form.append('answer', data.answer)

    if (withPicture) {
      questionImgIsDirty && data.questionImg && form.append('questionImg', data.questionImg)
      answerImgIsDirty && data.answerImg && form.append('answerImg', data.answerImg)
    }

    onSubmit(form)
  }

  return (
    <form onSubmit={handleSubmit(sendHandler)} className={s.root}>
      <DevTool control={control} />
      <Select
        options={options}
        label="Choose A Question Format"
        value={format}
        onValueChange={setFormat}
      />
      <ControlledTextField control={control} name="question" label="Question" />
      {withPicture && (
        <>
          <img src={questionImgUpd || noCover} alt={'img'} className={s.image} />
          {questionImgError && (
            <Typography variant="caption" className={s.error}>
              {questionImgError}
            </Typography>
          )}
          <ControlledFileUploader
            control={control}
            name="questionImg"
            variant="secondary"
            extraActions={extraActions}
            fullWidth
          >
            <Icon name="image" className={s.imgIcon} width={20} height={20} />
            Change Question Cover
          </ControlledFileUploader>
        </>
      )}
      <ControlledTextField control={control} name="answer" label="Answer" />
      {withPicture && (
        <>
          <img src={answerImgUpd || noCover} alt={'img'} className={s.image} />
          {answerImgError && (
            <Typography variant="caption" className={s.error}>
              {answerImgError}
            </Typography>
          )}
          <ControlledFileUploader
            control={control}
            name="answerImg"
            variant="secondary"
            extraActions={extraActions}
            fullWidth
          >
            <Icon name="image" className={s.imgIcon} width={20} height={20} />
            Change Answer Cover
          </ControlledFileUploader>
        </>
      )}
      <div className={s.controls}>
        <Button variant="secondary" type="button" onClick={onCancel}>
          Cancel
        </Button>
        <Button>Add New Card</Button>
      </div>
    </form>
  )
}
