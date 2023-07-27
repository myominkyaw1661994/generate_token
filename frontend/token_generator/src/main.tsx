import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider, useRouteError } from "react-router-dom"
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from './Themes'
import NavBar from './components/NavBar'
import TokenPage from './screen/TokenPage'
import ErrorBoundry from './components/ErrorBoundry'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorBoundry/> 
  },
  {
    path: "/token",
    element: <TokenPage/> ,
  }
])

// function ErrorBoundry(){
//   return <div>404 Page Not Found</div>;
// }

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>

    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
      {/* <App /> */}
      <RouterProvider router={router}/>
    </ChakraProvider>
  </React.StrictMode>,
)
