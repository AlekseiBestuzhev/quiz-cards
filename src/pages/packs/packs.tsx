import { useEffect, useState } from 'react'

import s from './packs.module.scss'

import { Button } from '@/components/ui/button'
import { Pagination } from '@/components/ui/pagination'
import { Typography } from '@/components/ui/typography'
import { useCreateDeckMutation, useGetDecksQuery } from '@/features/packs/services/decks.ts'
import { FilterControls, PacksTable } from '@/features/packs/ui'

export const Packs = () => {
  const [sliderValue, setSliderValue] = useState([0, 10])
  const [searchName, setSearchName] = useState('')

  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(5)

  const [tabValue, setTabValue] = useState('all')

  const tabs = [
    { value: 'my', text: 'My cards' },
    { value: 'all', text: 'All cards' },
  ]

  const packs = useGetDecksQuery({
    name: searchName,
    itemsPerPage: pageSize,
    minCardsCount: sliderValue[0],
    maxCardsCount: sliderValue[1],
    currentPage,
  })

  useEffect(() => {
    setCurrentPage(1)
  }, [searchName, sliderValue, pageSize])

  const [createDeck] = useCreateDeckMutation()

  const createDeckHandler = () => {
    createDeck({ name: 'Created Deck' })
  }

  return (
    <div className={s.root}>
      <div className={s.header}>
        <div className={s.top}>
          <Typography as="h1" variant="large">
            Packs list
          </Typography>
          <Button onClick={createDeckHandler}>Add New Pack</Button>
        </div>
        <FilterControls
          searchName={searchName}
          setSearchName={setSearchName}
          sliderValue={sliderValue}
          sliderMaxValue={packs?.data?.maxCardsCount}
          setSliderValue={setSliderValue}
          tabs={tabs}
          tabValue={tabValue}
          setTabValue={setTabValue}
        />
      </div>
      {packs?.data?.items && <PacksTable items={packs.data.items} />}
      <Pagination
        totalCount={packs?.data?.pagination.totalItems}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        pageSize={pageSize}
        onPageSizeChange={setPageSize}
        className={s.pagination}
      />
    </div>
  )
}
