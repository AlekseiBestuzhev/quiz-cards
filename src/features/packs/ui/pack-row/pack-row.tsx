import { FC, memo } from 'react'

import { Link, useNavigate } from 'react-router-dom'

import s from './pack-row.module.scss'

import defaultCover from '@/assets/images/default-image.jpg'
import { ROUTES } from '@/common/consts'
import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon/icon.tsx'
import { IconButton } from '@/components/ui/icon-button'
import { Table } from '@/components/ui/table'
import { Typography } from '@/components/ui/typography'
import { Deck } from '@/features/packs/services'
import { DeleteControl, EditControl } from '@/features/packs/ui'

type Props = {
  pack: Deck
  authUserId: string
}

export const PackRow: FC<Props> = memo(({ pack, authUserId }) => {
  const isMyPack = authUserId === pack.author.id

  const navigate = useNavigate()

  const onLearn = () => {
    navigate(`${pack.id}${ROUTES.learn}`)
  }

  return (
    <Table.Row key={pack.id} className={s.root}>
      <Table.Cell align="left" className={s.name}>
        <Button as={Link} to={pack.id} variant="link" className={s.link}>
          <img src={pack.cover ?? defaultCover} alt="Pack cover" className={s.cover} />
          <Typography as="h3" variant="body2">
            {pack.name}
          </Typography>
        </Button>
      </Table.Cell>
      <Table.Cell className={s.count}>{pack.cardsCount}</Table.Cell>
      <Table.Cell className={s.date}>{new Date(pack.updated).toLocaleDateString()}</Table.Cell>
      <Table.Cell className={s.createdBy}>{pack.author.name}</Table.Cell>
      <Table.Cell className={s.cell}>
        <div className={s.controls}>
          {isMyPack ? (
            <>
              <EditControl
                id={pack.id}
                name={pack.name}
                isPrivate={pack.isPrivate}
                cover={pack.cover}
              />
              <IconButton
                icon={<Icon name={'play'} width={18} height={18} />}
                disabled={!pack.cardsCount}
                onClick={onLearn}
                small
              />
              <DeleteControl id={pack.id} name={pack.name} />
            </>
          ) : (
            <IconButton
              icon={<Icon name={'play'} width={18} height={18} />}
              disabled={!pack.cardsCount}
              onClick={onLearn}
              small
            />
          )}
        </div>
      </Table.Cell>
    </Table.Row>
  )
})
