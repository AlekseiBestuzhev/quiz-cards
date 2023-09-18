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

  const setSearchName = (newSearchName: string) => {
    dispatch(packsActions.setSearchName({ newSearchName }))
  }

  const setTabValue = (newTabValue: string) => {
    dispatch(packsActions.setTabValue({ newTabValue }))
  }

  const setSliderValue = (newSliderValue: number[]) => {
    dispatch(packsActions.setSliderValue({ newSliderValue }))
  }

  return { searchName, tabValue, sliderValue, setSearchName, setTabValue, setSliderValue }
}
