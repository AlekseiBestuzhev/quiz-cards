import { ReactNode } from 'react'

import { BrowserRouter } from 'react-router-dom'

export const BrowserRouterDecorator = (storyFn: () => ReactNode) => {
  return <BrowserRouter>{storyFn()}</BrowserRouter>
}
