import { Provider } from 'react-redux'

import { Router } from '@/router.tsx'
import { store } from '@/services/store.ts'

export const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}
