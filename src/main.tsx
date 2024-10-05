import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChakraBaseProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import App from './App.tsx'
import  {store} from './store/store.ts' // ini harus di importnya
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
    <ChakraBaseProvider>
      <QueryClientProvider client={new QueryClient}>
    <App />
    </QueryClientProvider>
    </ChakraBaseProvider>
    </Provider>
  </StrictMode>,
)
