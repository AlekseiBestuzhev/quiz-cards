import { useCallback } from 'react'

import { useAppDispatch, useAppSelector } from '@/common/hooks'
import { currentPageSelector, pageSizeSelector } from '@/features/packs/model/selectors'
import { packsActions } from '@/features/packs/model/slice/packs.sliece.ts'

export const usePacksPagination = () => {
  const currentPage = useAppSelector(currentPageSelector)
  const pageSize = useAppSelector(pageSizeSelector)

  const dispatch = useAppDispatch()

  const setCurrentPage = useCallback((newPage: number) => {
    dispatch(packsActions.setCurrentPage({ newPage }))
  }, [])

  const setPageSize = useCallback((newPageSize: number) => {
    dispatch(packsActions.setPageSize({ newPageSize }))
  }, [])

  return { currentPage, pageSize, setCurrentPage, setPageSize }
}
