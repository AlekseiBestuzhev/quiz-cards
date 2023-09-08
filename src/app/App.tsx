import { Provider } from 'react-redux'

import { Router, store } from '@/app/providers'

export const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}
