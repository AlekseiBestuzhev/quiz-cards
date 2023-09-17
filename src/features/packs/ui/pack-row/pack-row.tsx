import { FC } from 'react'

import s from './pack-row.module.scss'

import { Icon } from '@/components/ui/icon/icon.tsx'
import { IconButton } from '@/components/ui/icon-button'
import { Table } from '@/components/ui/table'
import { Deck } from '@/features/packs/services/types.ts'

type Props = {
  pack: Deck
  authUserId: string
}

export const PackRow: FC<Props> = ({ pack, authUserId }) => {
  const isMyPack = authUserId === pack.author.id

  return (
    <Table.Row key={pack.id}>
      <Table.Cell>{pack.name}</Table.Cell>
      <Table.Cell>{pack.cardsCount}</Table.Cell>
      <Table.Cell>{new Date(pack.updated).toLocaleDateString()}</Table.Cell>
      <Table.Cell>{pack.author.name}</Table.Cell>
      <Table.Cell className={s.controls}>
        {isMyPack ? (
          <div className={s.buttons}>
            <IconButton icon={<Icon name={'edit'} width={16} height={16} />} small />
            <IconButton icon={<Icon name={'play'} width={16} height={16} />} small />
            <IconButton icon={<Icon name={'trash-bin'} width={16} height={16} />} small />
          </div>
        ) : (
          <IconButton icon={<Icon name={'play'} width={16} height={16} />} small />
        )}
      </Table.Cell>
    </Table.Row>
  )
}
