import { useState } from 'react'

import { useParams } from 'react-router-dom'

import s from './learn.module.scss'

import { requestHandler } from '@/common/utils'
import { RateCardForm, RateType } from '@/components/forms/rate-card'
import { BackButton } from '@/components/ui/back-button'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import { useGetRandomCardQuery, useRateCardMutation } from '@/features/cards/services'
import { useGetDeckInfoQuery } from '@/features/packs/services'

export const Learn = () => {
  const [rateMode, setRateMode] = useState(false)

  const [rateCard] = useRateCardMutation()

  const params = useParams()
  const id = params.id as string
  const { currentData: pack } = useGetDeckInfoQuery({ id })
  const { currentData: card } = useGetRandomCardQuery({ id })

  const onSubmit = async (data: RateType) => {
    await requestHandler(async () => {
      await rateCard({ packId: id, cardId: card!.id, grade: +data.grade }).unwrap()
      setRateMode(false)
    })
  }

  return (
    <>
      <BackButton />
      <section className={s.root}>
        <Card className={s.content}>
          <Typography as="h1" variant="large" className={s.title}>
            Learn {pack?.name}
          </Typography>
          <div className={s.question}>
            <Typography variant="body1">
              <b>Question:</b> {card?.question}
            </Typography>
            <Typography variant="body2" className={s.caption}>
              Count of attempts: {card?.shots}
            </Typography>
            {card?.questionImg && (
              <img src={card.questionImg} alt="Question Image" className={s.cover} />
            )}
          </div>

          {rateMode ? (
            <>
              <div className={s.answer}>
                <Typography variant="body1" className={s.answerText}>
                  <b>Answer:</b> {card?.answer}
                </Typography>
                {card?.answerImg && (
                  <img src={card.answerImg} alt="Question Image" className={s.cover} />
                )}
              </div>
              <Typography variant="body1" className={s.rate}>
                <b>Rate yourself:</b>
              </Typography>
              <RateCardForm onSubmit={onSubmit} />
            </>
          ) : (
            <Button onClick={() => setRateMode(true)} fullWidth>
              Show Answer
            </Button>
          )}
        </Card>
      </section>
    </>
  )
}
