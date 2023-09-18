import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom'

import { privateRoutes, publicRoutes } from './routes.tsx'

import { Layout } from '@/components/layout'
import { useGetMeQuery } from '@/features/auth/services/auth.ts'

const PrivateRoutes = () => {
  const { data: me, isLoading: isMeLoading } = useGetMeQuery()
  const isAuthenticated = !!me && !('success' in me)

  if (isMeLoading) return <div>Loading...</div>

  return isAuthenticated ? <Outlet /> : <Navigate to="/sign-in" />
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <div>Error Boundary</div>,
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
