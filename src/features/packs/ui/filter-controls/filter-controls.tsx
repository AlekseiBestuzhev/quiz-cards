import { FC } from 'react'

import s from './filter-controls.module.scss'

import { Button } from '@/components/ui/button'
import { Icon } from '@/components/ui/icon/icon.tsx'
import { Slider } from '@/components/ui/slider'
import { Tab, TabSwitcher } from '@/components/ui/tab-switcher'
import { TextField } from '@/components/ui/text-field'
import { useGetMeQuery } from '@/features/auth'
import { UserResponse } from '@/features/auth/services/types.ts'

type Props = {
  searchName: string
  setSearchName: (newString: string) => void
  sliderValue: number[]
  sliderMaxValue?: number
  setSliderValue: (newValue: number[]) => void
  tabValue: string
  setTabValue: (newTab: string) => void
}

export const FilterControls: FC<Props> = ({
  searchName,
  setSearchName,
  sliderValue,
  sliderMaxValue = 10,
  setSliderValue,
  tabValue,
  setTabValue,
}) => {
  const { data } = useGetMeQuery()

  const userId = (data as UserResponse).id

  const tabs: Tab[] = [
    { value: userId, text: 'My cards' },
    { value: '', text: 'All cards' },
  ]

  const clearFilterHandler = () => {
    setSliderValue([0, sliderMaxValue])
    setSearchName('')
    setTabValue('')
  }

  const onClearTextField = () => {
    setSearchName('')
  }

  return (
    <div className={s.filter}>
      <TextField
        type="search"
        className={s.textField}
        value={searchName}
        onChange={e => setSearchName(e.currentTarget.value)}
        clearField={onClearTextField}
      />
      <TabSwitcher
        tabs={tabs}
        value={tabValue}
        onValueChange={setTabValue}
        label="Show packs cards"
      />
      <Slider
        value={sliderValue}
        onChange={setSliderValue}
        label="Number of cards"
        min={0}
        max={sliderMaxValue}
      />
      <Button variant="secondary" onClick={clearFilterHandler}>
        <Icon name={'trash-bin'} className={s.icon} />
        Clear Filter
      </Button>
    </div>
  )
}
