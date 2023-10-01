import { FC, memo, useState } from 'react'

import s from './card-row.module.scss'

import { Dialog } from '@/components/ui/dialog/dialog.tsx'
import { Icon } from '@/components/ui/icon/icon.tsx'
import { IconButton } from '@/components/ui/icon-button'
import { Rating } from '@/components/ui/rating'
import { Table } from '@/components/ui/table'
import { Typography } from '@/components/ui/typography'
import { Card, useDeleteCardMutation } from '@/features/cards/services'

type Props = {
  card: Card
  isMyPack: boolean
}

export const CardRow: FC<Props> = memo(({ card, isMyPack }) => {
  const [deleteIsOpen, setDeleteIsOpen] = useState(false)
  //const [editIsOpen, setEditIsOpen] = useState(false)

  const [deleteCard] = useDeleteCardMutation()

  const onConfirm = async () => {
    try {
      await deleteCard({ id: card.id })
      setDeleteIsOpen(false)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <>
      <Dialog
        title="Delete Card"
        description="Do you really want to remove this card?"
        buttonText="Delete Card"
        open={deleteIsOpen}
        setOpen={setDeleteIsOpen}
        onConfirm={onConfirm}
      />
      {/*<EditPackModal open={editIsOpen} setOpen={setEditIsOpen} pack={card} />*/}

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
              <IconButton
                icon={<Icon name={'edit'} width={16} height={16} />}
                // onClick={() => ()}
                small
              />
              <IconButton
                icon={<Icon name={'trash-bin'} width={16} height={16} />}
                onClick={() => setDeleteIsOpen(true)}
                small
              />
            </div>
          </Table.Cell>
        )}
      </Table.Row>
    </>
  )
})
