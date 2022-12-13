import { ThemeProvider } from '@mui/material/styles'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { theme } from './theme/theme'
import {RouterProvider} from 'react-router-dom';
import { route } from './route/router';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <ThemeProvider theme={theme}>
    <React.StrictMode>
        <RouterProvider router={route}/>
    </React.StrictMode>
    </ThemeProvider>
)
