import { useState } from 'react'

import { CardPropsDV } from '@/components/forms/card/card.tsx'

export const usePreviewErrorData = (defaultValues?: CardPropsDV) => {
  const isAnyPictureExist = defaultValues?.questionImg || defaultValues?.answerImg

  const [questionImgUpd, setQuestionImgUpd] = useState(defaultValues?.questionImg || null)
  const [answerImgUpd, setAnswerImgUpd] = useState(defaultValues?.answerImg || null)

  const [answerImgError, setAnswerImgError] = useState<string | null>(null)
  const [questionImgError, setQuestionImgError] = useState<string | null>(null)

  const errorData = {
    questionImg: { text: questionImgError, set: setQuestionImgError },
    answerImg: { text: answerImgError, set: setAnswerImgError },
  }

  const previewData = {
    questionImg: { picture: questionImgUpd, set: setQuestionImgUpd },
    answerImg: { picture: answerImgUpd, set: setAnswerImgUpd },
  }

  return { errorData, previewData, isAnyPictureExist }
}
