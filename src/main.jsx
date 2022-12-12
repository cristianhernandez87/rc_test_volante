import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Index, { action as loginAction } from './pages/Index'
import Weather, { loader as weatherLoader } from './pages/Weather'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        action: loginAction
      },
      {
        path: '/weather/c',
        element: <Weather mode='celsius'/>,
        loader: weatherLoader
      },
      {
        path: '/weather/f',
        element: <Weather mode='ferenheit' />,
        loader: weatherLoader
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
