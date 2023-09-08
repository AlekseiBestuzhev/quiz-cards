import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
} from 'react-router-dom'

import { Layout } from '@/components/layout'
import { ForgotPassword, SignIn, SignUp } from '@/pages'

const publicRoutes: RouteObject[] = [
  {
    path: '/sign-in',
    element: <SignIn />,
  },
  {
    path: '/sign-up',
    element: <SignUp />,
  },
  {
    path: '/recover-password',
    element: <ForgotPassword />,
  },
]

const privateRoutes: RouteObject[] = [
  {
    path: '/',
    element: <div>Kind of authorized</div>,
  },
]

const PrivateRoutes = () => {
  const isAuthenticated = false

  return isAuthenticated ? <Outlet /> : <Navigate to="/sign-in" />
}

const router = createBrowserRouter([
  {
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
