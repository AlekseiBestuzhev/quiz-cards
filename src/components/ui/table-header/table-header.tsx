import { ComponentPropsWithoutRef, FC } from 'react'

import { clsx } from 'clsx'

import s from './table-header.module.scss'

import { Icon } from '@/components/ui/icon/icon.tsx'
import { Table } from '@/components/ui/table'

export type Sort = {
  key: string
  direction: 'asc' | 'desc'
} | null

export type Column = {
  key: string
  title: string
  sortable?: boolean
}

export type TableHeaderProps = Omit<
  ComponentPropsWithoutRef<'thead'> & {
    columns: Column[]
    sort?: Sort
    onSort?: (sort: Sort) => void
  },
  'children'
>

export const TableHeader: FC<TableHeaderProps> = ({ columns, sort, onSort, ...restProps }) => {
  const handleSort = (key: string, sortable?: boolean) => () => {
    if (!onSort || sortable === false) {
      return
    }

    if (sort?.key !== key) {
      return onSort({ key, direction: 'asc' })
    }
    if (sort.direction === 'desc') {
      return onSort(null)
    }

    return onSort({
      key,
      direction: sort?.direction === 'asc' ? 'desc' : 'asc',
    })
  }

  return (
    <Table.Head {...restProps}>
      <Table.Row>
        {columns.map(({ title, key, sortable }) => {
          const sortTerms = sort && sort.key === key
          const classes = {
            cell: clsx(!(sortable === false) && s.hover),
            icon: clsx(s.icon, sortTerms && sort.direction === 'desc' && s.down),
          }

          return (
            <Table.HeadCell key={key} onClick={handleSort(key, sortable)} className={classes.cell}>
              {title}
              {sortTerms && <Icon name={'arrowDown'} className={classes.icon} />}
            </Table.HeadCell>
          )
        })}
      </Table.Row>
    </Table.Head>
  )
}
