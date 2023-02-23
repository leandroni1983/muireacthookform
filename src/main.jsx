import { CssBaseline } from '@mui/material'
import { ThemeProvider } from "@mui/material/styles";
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import RoutesApp from './RoutesApp'
import ButtonAppBar from './components/NavBar'
import './style.css'

import { theme } from "./theme/theme";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ButtonAppBar />
        <RoutesApp />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
