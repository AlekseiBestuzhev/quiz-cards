import { useCallback } from 'react'

import { useParams } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '@/common/hooks'
import {
  packCurrentPageSelector,
  packPageSizeSelector,
  packSearchNameSelector,
} from '@/features/pack/model/selectors'
import { packActions } from '@/features/pack/model/slice'

export const usePackData = () => {
  const currentPage = useAppSelector(packCurrentPageSelector)
  const pageSize = useAppSelector(packPageSizeSelector)
  const searchName = useAppSelector(packSearchNameSelector)

  const { id } = useParams()
  const packId = id as string

  const dispatch = useAppDispatch()

  const setCurrentPage = useCallback((newPage: number) => {
    dispatch(packActions.setCurrentPage({ newPage }))
  }, [])

  const setPageSize = useCallback((newPageSize: number) => {
    dispatch(packActions.setPageSize({ newPageSize }))
  }, [])

  const setSearchName = useCallback((newSearchName: string) => {
    dispatch(packActions.setSearchName({ newSearchName }))
  }, [])

  return { packId, currentPage, pageSize, setCurrentPage, setPageSize, searchName, setSearchName }
}
