import { useCallback, useEffect, useState } from 'react'

import s from './packs.module.scss'

import { Button } from '@/components/ui/button'
import { ModalWindow } from '@/components/ui/modal-window'
import { Pagination } from '@/components/ui/pagination'
import { TextField } from '@/components/ui/text-field'
import { Typography } from '@/components/ui/typography'
import { useGetMeQuery } from '@/features/auth'
import { UserResponse } from '@/features/auth/services/types.ts'
import { usePacksFilter, usePacksPagination } from '@/features/packs/model/hooks'
import { useCreateDeckMutation, useGetDecksQuery } from '@/features/packs/services'
import { FilterControls, PacksTable } from '@/features/packs/ui'

export const Packs = () => {
  const { currentPage, pageSize, setCurrentPage, setPageSize } = usePacksPagination()
  const { searchName, tabValue, sliderValue, setSearchName, setTabValue, setSliderValue } =
    usePacksFilter()

  const setPage = useCallback(setCurrentPage, [])
  const setSize = useCallback(setPageSize, [])
  const setSearch = useCallback(setSearchName, [])
  const setTab = useCallback(setTabValue, [])
  const setSlider = useCallback(setSliderValue, [])

  const [newPackTitle, setNewPackTitle] = useState('')
  const [open, setOpen] = useState(false)

  const { data } = useGetMeQuery()
  const userId = (data as UserResponse).id

  const packs = useGetDecksQuery({
    name: searchName,
    authorId: tabValue,
    minCardsCount: sliderValue[0],
    maxCardsCount: sliderValue[1],
    currentPage,
    itemsPerPage: pageSize,
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
          setSearchName={setSearch}
          sliderValue={sliderValue}
          sliderMaxValue={packs?.data?.maxCardsCount}
          setSliderValue={setSlider}
          tabValue={tabValue}
          setTabValue={setTab}
          authUserId={userId}
        />
      </div>
      {packs?.data?.items && <PacksTable items={packs.data.items} authUserId={userId} />}
      <Pagination
        totalCount={packs?.data?.pagination.totalItems}
        currentPage={currentPage}
        onPageChange={setPage}
        pageSize={pageSize}
        onPageSizeChange={setSize}
        className={s.pagination}
      />
    </div>
  )
}
