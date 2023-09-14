import { FC } from 'react'

import { clsx } from 'clsx'

import { NavigationBlock } from './navigation-block/navigation-block.tsx'
import { PageSizeSelect } from './page-size-select/page-size-select.tsx'
import s from './pagination.module.scss'
import { usePagination } from './usePagination.ts'

import { Typography } from '@/components/ui/typography'

export type PaginationProps = {
  totalCount?: number
  currentPage: number
  onPageChange: (newPage: number) => void
  pageSize: number
  onPageSizeChange: (newPageSize: number) => void
  siblingCount?: number
  className?: string
}

export const Pagination: FC<PaginationProps> = ({
  totalCount = 10,
  currentPage,
  onPageChange,
  pageSize,
  onPageSizeChange,
  siblingCount,
  className,
}) => {
  const classes = clsx(s.root, className)

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  })

  if (currentPage === 0 || paginationRange.length < 2) {
    return null
  }

  return (
    <div className={classes}>
      <NavigationBlock
        paginationRange={paginationRange}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
      <div className={s.selectBlock}>
        <Typography variant="body2">Show</Typography>
        <PageSizeSelect pageSize={pageSize} onPageSizeChange={onPageSizeChange} />
        <Typography variant="body2">on the page</Typography>
      </div>
    </div>
  )
}
