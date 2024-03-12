import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// React-router-
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'


// react-redux
import { Provider } from 'react-redux'
import Store from './app/Mystore.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
    <BrowserRouter>
      <Provider store={Store}>
        <App />
      </Provider>
    </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
)
