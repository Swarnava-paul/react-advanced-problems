import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { ChakraProvider } from '@chakra-ui/react'
import { Component_context_provider } from './context/component-context.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <Component_context_provider>
       <App />
    </Component_context_provider>
    </ChakraProvider>
  </React.StrictMode>,
)
