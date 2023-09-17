import { useEffect, useState } from 'react'

import s from './packs.module.scss'

import { Button } from '@/components/ui/button'
import { ModalWindow } from '@/components/ui/modal-window'
import { Pagination } from '@/components/ui/pagination'
import { TextField } from '@/components/ui/text-field'
import { Typography } from '@/components/ui/typography'
import { useCreateDeckMutation, useGetDecksQuery } from '@/features/packs/services/decks.ts'
import { FilterControls, PacksTable } from '@/features/packs/ui'

export const Packs = () => {
  const [sliderValue, setSliderValue] = useState([0, 10])
  const [searchName, setSearchName] = useState('')

  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(5)

  const [tabValue, setTabValue] = useState('')

  const [newPackTitle, setNewPackTitle] = useState('')
  const [open, setOpen] = useState(false)

  const packs = useGetDecksQuery({
    authorId: tabValue,
    name: searchName,
    itemsPerPage: pageSize,
    minCardsCount: sliderValue[0],
    maxCardsCount: sliderValue[1],
    currentPage,
  })

  useEffect(() => {
    setCurrentPage(1)
  }, [searchName, sliderValue, pageSize, tabValue])

  const [createDeck] = useCreateDeckMutation()

  const createDeckHandler = () => {
    createDeck({ name: newPackTitle })
    setNewPackTitle('')
    setOpen(false)
  }

  return (
    <div className={s.root}>
      <ModalWindow open={open} setOpen={setOpen} title="Create new pack">
        <TextField
          value={newPackTitle}
          onChange={e => setNewPackTitle(e.currentTarget.value)}
          label="Enter title"
        />
        <Button onClick={createDeckHandler} style={{ marginTop: '36px' }}>
          Create
        </Button>
      </ModalWindow>
      <div className={s.header}>
        <div className={s.top}>
          <Typography as="h1" variant="large">
            Packs list
          </Typography>
          <Button onClick={() => setOpen(true)}>Add New Pack</Button>
        </div>
        <FilterControls
          searchName={searchName}
          setSearchName={setSearchName}
          sliderValue={sliderValue}
          sliderMaxValue={packs?.data?.maxCardsCount}
          setSliderValue={setSliderValue}
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
