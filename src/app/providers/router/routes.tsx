import { Navigate, RouteObject } from 'react-router-dom'

import { ROUTES } from '@/common/consts'
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
    path: ROUTES.signIn,
    element: <SignIn />,
  },
  {
    path: ROUTES.signUp,
    element: <SignUp />,
  },
  {
    path: ROUTES.recoverPassword,
    element: <ForgotPassword />,
  },
  {
    path: `${ROUTES.checkEmail}/:email`,
    element: <CheckEmail />,
  },
  {
    path: `${ROUTES.createNewPassword}/:token`,
    element: <CreateNewPassword />,
  },
  {
    path: ROUTES.rest,
    element: <NotFound />,
  },
]

export const privateRoutes: RouteObject[] = [
  {
    path: ROUTES.base,
    element: <Navigate to={ROUTES.packs} />,
  },
  {
    path: ROUTES.packs,
    element: <Packs />,
  },
  {
    path: ROUTES.profile,
    element: <Profile />,
  },
  {
    path: `${ROUTES.packs}/:id`,
    element: <Pack />,
  },
  {
    path: `${ROUTES.packs}/:id${ROUTES.learn}`,
    element: <Learn />,
  },
]
