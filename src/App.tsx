import { BrowserRouter } from 'react-router-dom'

import { SignIn } from '@/pages/sign-in/sign-in.tsx'

export const App = () => {
  return (
    <BrowserRouter>
      <SignIn />
    </BrowserRouter>
  )
}
