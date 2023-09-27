import { Navigate, RouteObject } from 'react-router-dom'

import { CreateNewPassword, ForgotPassword, Packs, SignIn, SignUp, Profile, Pack } from '@/pages'

export const publicRoutes: RouteObject[] = [
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
  {
    path: '/create-new-password',
    element: <CreateNewPassword />,
  },
]

export const privateRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/packs" />,
  },
  {
    path: '/packs',
    element: <Packs />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
  {
    path: '/packs/:id',
    element: <Pack />,
  },
  {
    path: '/packs/:id/learn',
    element: <div>Learn page</div>,
  },
]
