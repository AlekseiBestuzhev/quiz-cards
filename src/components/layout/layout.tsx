import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import s from './layout.module.scss'

import { Header } from '@/components/ui/header'
import { useGetMeQuery, useLogoutMutation } from '@/features/auth/services'

export const Layout = () => {
  const { data } = useGetMeQuery()

  const [logout] = useLogoutMutation()

  const headerData =
    data && !('success' in data)
      ? {
          name: data.name,
          email: data.email,
          avatar: data.avatar,
        }
      : null

  return (
    <>
      <Header data={headerData} logout={logout} />
      <div className={s.content}>
        <Outlet />
        <ToastContainer
          enableMultiContainer
          containerId="common"
          position="bottom-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </>
  )
}
