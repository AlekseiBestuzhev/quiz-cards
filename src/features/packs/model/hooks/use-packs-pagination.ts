import { useAppDispatch, useAppSelector } from '@/common/hooks'
import { currentPageSelector, pageSizeSelector } from '@/features/packs/model/selectors'
import { packsActions } from '@/features/packs/model/slice/packs.sliece.ts'

export const usePacksPagination = () => {
  const currentPage = useAppSelector(currentPageSelector)
  const pageSize = useAppSelector(pageSizeSelector)

  const dispatch = useAppDispatch()

  const setCurrentPage = (newPage: number) => {
    dispatch(packsActions.setCurrentPage({ newPage }))
  }

  const setPageSize = (newPageSize: number) => {
    dispatch(packsActions.setPageSize({ newPageSize }))
  }

  return { currentPage, pageSize, setCurrentPage, setPageSize }
}
