import { FC, memo } from 'react'

import s from './card-row.module.scss'

import { Rating } from '@/components/ui/rating'
import { Table } from '@/components/ui/table'
import { Typography } from '@/components/ui/typography'
import { Card } from '@/features/cards/services'
import { DeleteCardControl, EditCardControl } from '@/features/cards/ui'

type Props = {
  card: Card
  isMyPack: boolean
}

export const CardRow: FC<Props> = memo(({ card, isMyPack }) => {
  return (
    <Table.Row key={card.id} className={s.root}>
      <Table.Cell>
        <div className={s.question}>
          {card.questionImg && <img src={card.questionImg} alt="Question" className={s.cover} />}
          <Typography as="h3" variant="body2">
            {card.question}
          </Typography>
        </div>
      </Table.Cell>
      <Table.Cell className={s.answerCell}>
        <div className={s.answer}>
          {card.answerImg && <img src={card.answerImg} alt="Answer" className={s.cover} />}
          <Typography as="h3" variant="body2">
            {card.answer}
          </Typography>
        </div>
      </Table.Cell>
      <Table.Cell className={s.date}>{new Date(card.updated).toLocaleDateString()}</Table.Cell>
      <Table.Cell className={s.grade}>
        <Rating selectedStars={card.grade} />
      </Table.Cell>
      {isMyPack && (
        <Table.Cell className={s.controls}>
          <div className={s.buttons}>
            <EditCardControl
              cardId={card.id}
              question={card.question}
              questionImg={card.questionImg}
              answer={card.answer}
              answerImg={card.answerImg}
            />
            <DeleteCardControl id={card.id} />
          </div>
        </Table.Cell>
      )}
    </Table.Row>
  )
})
