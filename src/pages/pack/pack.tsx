import { useMemo, useState } from 'react'

import { Link, useNavigate, useParams } from 'react-router-dom'

import s from './pack.module.scss'

import { BackButton } from '@/components/ui/back-button'
import { Button } from '@/components/ui/button'
import { DropDown, DropDownItemWithIcon } from '@/components/ui/drop-down'
import { Icon } from '@/components/ui/icon/icon.tsx'
import { Pagination } from '@/components/ui/pagination'
import { Sort } from '@/components/ui/table-header'
import { TextField } from '@/components/ui/text-field'
import { Typography } from '@/components/ui/typography'
import { ProfileResponse, useGetMeQuery } from '@/features/auth/services'
import { useGetCardsQuery } from '@/features/cards/services'
import { CreateCardControl } from '@/features/cards/ui'
import { CardsTable } from '@/features/cards/ui/cards-table/cards-table.tsx'
import { useGetDeckInfoQuery } from '@/features/packs/services'
import { EditPackModal } from '@/features/packs/ui'

export const Pack = () => {
  const navigate = useNavigate()

  const { id: packId } = useParams()
  const { data: pack, isLoading: packLoading } = useGetDeckInfoQuery({ id: packId as string })
  const authorId = pack?.userId

  const { data: me } = useGetMeQuery()
  const authUserId = (me as ProfileResponse)?.id

  const isMyPack = authorId === authUserId

  const [searchName, setSearchName] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [pageSize, setPageSize] = useState(5)

  const [sort, setSort] = useState<Sort>({ key: 'updated', direction: 'desc' })
  const sortedString = useMemo(() => {
    if (!sort) return ''

    return `${sort.key}-${sort.direction}`
  }, [sort])

  const { data } = useGetCardsQuery({
    id: packId as string,
    params: {
      question: searchName,
      orderBy: sortedString,
      currentPage,
      itemsPerPage: pageSize,
    },
  })

  const [editIsOpen, setEditIsOpen] = useState(false)

  if (packLoading) return <p>Loading...</p>

  return (
    <section className={s.root}>
      {pack && (
        <EditPackModal
          open={editIsOpen}
          setOpen={setEditIsOpen}
          id={pack.id}
          name={pack.name}
          isPrivate={pack.isPrivate}
          cover={pack.cover}
        />
      )}
      <BackButton to="/packs" text="Back to Packs" />
      <div className={s.header}>
        <div className={s.top}>
          <Typography as="h1" variant="large" className={s.title}>
            {pack?.name}
            {isMyPack && (
              <DropDown>
                <DropDownItemWithIcon
                  onSelect={() => navigate(`./learn`)}
                  icon={<Icon name="play" />}
                  text="Learn"
                />
                <DropDownItemWithIcon
                  onSelect={() => setEditIsOpen(true)}
                  icon={<Icon name="edit" />}
                  text="Edit"
                />
                <DropDownItemWithIcon icon={<Icon name="delete" />} text="Delete" />
              </DropDown>
            )}
          </Typography>
          {pack && isMyPack ? (
            <CreateCardControl packId={pack.id} />
          ) : (
            <Button as={Link} to={`./learn`}>
              Learn Cards
            </Button>
          )}
        </div>
        {pack?.cover && <img src={pack.cover} alt="Cover" className={s.cover} />}
        <TextField
          type="search"
          value={searchName}
          placeholder="Search by question"
          onChange={e => setSearchName(e.currentTarget.value)}
          clearField={() => setSearchName('')}
        />
      </div>
      {data?.items && (
        <CardsTable cards={data.items} isMyPack={isMyPack} sort={sort} onSort={setSort} />
      )}
      <Pagination
        totalCount={data?.pagination.totalItems}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        pageSize={pageSize}
        onPageSizeChange={setPageSize}
        className={s.pagination}
      />
    </section>
  )
}
