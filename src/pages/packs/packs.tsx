import { useEffect, useState } from 'react'

import s from './packs.module.scss'

import { useDebounce } from '@/common/hooks'
import { getSortedString, requestHandler } from '@/common/utils'
import { PackForm } from '@/components/forms/pack'
import { Button } from '@/components/ui/button'
import { ModalWindow } from '@/components/ui/modal-window'
import { Pagination } from '@/components/ui/pagination'
import { Sort } from '@/components/ui/table-header'
import { Typography } from '@/components/ui/typography'
import { useGetMeQuery, UserResponse } from '@/features/auth/services'
import { usePacksFilter, usePacksPagination } from '@/features/packs/model/hooks'
import { useCreateDeckMutation, useGetDecksQuery } from '@/features/packs/services'
import { FilterControls, PacksTable } from '@/features/packs/ui'

export const Packs = () => {
  const { currentPage, pageSize, setCurrentPage, setPageSize } = usePacksPagination()
  const { searchName, tabValue, sliderValue, setSearchName, setTabValue, setSliderValue } =
    usePacksFilter()

  const debouncedSearchName = useDebounce(searchName)
  const debouncedSliderValue = useDebounce(sliderValue)

  const [open, setOpen] = useState(false)

  const [sort, setSort] = useState<Sort>({ key: 'updated', direction: 'desc' })

  const sortedString = getSortedString(sort)

  const { data } = useGetMeQuery()
  const userId = (data as UserResponse).id

  const packs = useGetDecksQuery({
    name: debouncedSearchName,
    authorId: tabValue,
    minCardsCount: debouncedSliderValue[0],
    maxCardsCount: debouncedSliderValue[1],
    orderBy: sortedString,
    currentPage,
    itemsPerPage: pageSize,
  })

  const totalCards = packs?.data?.maxCardsCount

  useEffect(() => {
    if ((totalCards && totalCards / pageSize < currentPage) || tabValue) {
      setCurrentPage(1)
    }
  }, [debouncedSearchName, debouncedSliderValue, pageSize, tabValue])

  const [createDeck] = useCreateDeckMutation()

  const createDeckHandler = async (data: FormData) => {
    await requestHandler(async () => {
      await createDeck(data).unwrap()
      setOpen(false)
    })
  }

  return (
    <section className={s.root}>
      <ModalWindow open={open} setOpen={setOpen} title="Create new pack">
        <PackForm onSubmit={createDeckHandler} onCancel={() => setOpen(false)} />
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
          authUserId={userId}
        />
      </div>
      {packs?.data?.items && (
        <PacksTable items={packs.data.items} authUserId={userId} sort={sort} onSort={setSort} />
      )}
      <Pagination
        totalCount={packs?.data?.pagination.totalItems}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        pageSize={pageSize}
        onPageSizeChange={setPageSize}
        className={s.pagination}
      />
    </section>
  )
}
