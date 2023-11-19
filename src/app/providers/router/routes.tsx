import { Navigate, RouteObject } from 'react-router-dom'

import {
  CreateNewPassword,
  ForgotPassword,
  Profile,
  SignIn,
  SignUp,
  Packs,
  Learn,
  Pack,
  NotFound,
  CheckEmail,
} from '@/pages'

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
    path: '/check-email/:email',
    element: <CheckEmail />,
  },
  {
    path: '/create-new-password/:token',
    element: <CreateNewPassword />,
  },
  {
    path: '/*',
    element: <NotFound />,
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
    element: <Learn />,
  },
]
