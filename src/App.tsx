import { BrowserRouter } from 'react-router-dom'

import { Layout } from '@/components/layout'

export const App = () => {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}
