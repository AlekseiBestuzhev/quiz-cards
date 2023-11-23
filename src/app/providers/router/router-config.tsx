import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom'

import { privateRoutes, publicRoutes } from './routes.tsx'

import { ROUTES } from '@/common/consts'
import { Layout } from '@/components/layout'
import { useGetMeQuery } from '@/features/auth/services'
import { InitLoading } from '@/features/loading/ui'

const PrivateRoutes = () => {
  const { data, isLoading } = useGetMeQuery()
  const isAuthenticated = !!data && !('success' in data)

  if (isLoading) return <InitLoading />

  return isAuthenticated ? <Outlet /> : <Navigate to={ROUTES.signIn} />
}

const router = createBrowserRouter([
  {
    path: ROUTES.base,
    element: <Layout />,
    children: [
      {
        element: <PrivateRoutes />,
        children: privateRoutes,
      },
      ...publicRoutes,
    ],
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}
