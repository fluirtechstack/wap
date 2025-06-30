// src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './app/store'
import AppRoutes from './app/router'
import './index.css'
import Snackbar from './components/ui/Snackbar/Snackbar'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AppRoutes /> {/* Aqui está o useRoutes() */}
        <Snackbar isVisible={true} text={'Texto do Snackbar'} color={"#c3c3c3"} />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
