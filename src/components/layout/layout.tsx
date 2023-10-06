import { Outlet } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'

import s from './layout.module.scss'

import { Header } from '@/components/ui/header'
import { useGetMeQuery, useLogoutMutation } from '@/features/auth/services'
import { ErrorResponse } from '@/features/packs/services'

export const Layout = () => {
  const { data } = useGetMeQuery()

  const [logout] = useLogoutMutation()

  const logoutHandler = async () => {
    try {
      await logout().unwrap()
      toast.info('You are successfully logged out', { containerId: 'common' })
    } catch (err) {
      if (typeof err === 'object' && err !== null && 'data' in err) {
        const error = err as ErrorResponse

        toast.error(error.data.errorMessages[0].message, { containerId: 'common' })
      }
    }
  }

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
      <Header data={headerData} logout={logoutHandler} />
      <div className={s.content}>
        <Outlet />
        <ToastContainer
          enableMultiContainer
          containerId="common"
          position="bottom-left"
          autoClose={6000}
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
