import { Outlet } from 'react-router-dom'

import { Header } from '@/components/ui/header'

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
