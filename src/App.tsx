import { BrowserRouter } from 'react-router-dom'

import { SignUp } from '@/pages'

export const App = () => {
  return (
    <BrowserRouter>
      <SignUp />
    </BrowserRouter>
  )
}
