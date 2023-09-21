import { FC, memo } from 'react'

import s from './pack-row.module.scss'

import { Icon } from '@/components/ui/icon/icon.tsx'
import { IconButton } from '@/components/ui/icon-button'
import { Table } from '@/components/ui/table'
import { Deck } from '@/features/packs/services'
import { DeleteControl } from '@/features/packs/ui'

type Props = {
  pack: Deck
  authUserId: string
}

export const PackRow: FC<Props> = memo(({ pack, authUserId }) => {
  const isMyPack = authUserId === pack.author.id

  return (
    <Table.Row key={pack.id}>
      <Table.Cell>{pack.name}</Table.Cell>
      <Table.Cell>{pack.cardsCount}</Table.Cell>
      <Table.Cell>{new Date(pack.updated).toLocaleDateString()}</Table.Cell>
      <Table.Cell>{pack.author.name}</Table.Cell>
      <Table.Cell className={s.cell}>
        <div className={s.controls}>
          {isMyPack ? (
            <>
              <IconButton icon={<Icon name={'edit'} width={18} height={18} />} small />
              <IconButton
                icon={<Icon name={'play'} width={18} height={18} />}
                disabled={!pack.cardsCount}
                small
              />
              <DeleteControl id={pack.id} />
            </>
          ) : (
            <IconButton
              icon={<Icon name={'play'} width={18} height={18} />}
              disabled={!pack.cardsCount}
              small
            />
          )}
        </div>
      </Table.Cell>
    </Table.Row>
  )
})
