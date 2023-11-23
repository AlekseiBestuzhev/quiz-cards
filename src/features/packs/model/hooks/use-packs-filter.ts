import { useCallback } from 'react'

import { useAppDispatch, useAppSelector } from '@/common/hooks'
import {
  searchNameSelector,
  sliderValueSelector,
  tabValueSelector,
} from '@/features/packs/model/selectors'
import { packsActions } from '@/features/packs/model/slice/packs.sliece.ts'

export const usePacksFilter = () => {
  const searchName = useAppSelector(searchNameSelector)
  const tabValue = useAppSelector(tabValueSelector)
  const sliderValue = useAppSelector(sliderValueSelector)

  const dispatch = useAppDispatch()

  const setSearchName = useCallback((newSearchName: string) => {
    dispatch(packsActions.setSearchName({ newSearchName }))
  }, [])

  const setTabValue = useCallback((newTabValue: string) => {
    dispatch(packsActions.setTabValue({ newTabValue }))
  }, [])

  const setSliderValue = useCallback((newSliderValue: number[]) => {
    dispatch(packsActions.setSliderValue({ newSliderValue }))
  }, [])

  return { searchName, tabValue, sliderValue, setSearchName, setTabValue, setSliderValue }
}
