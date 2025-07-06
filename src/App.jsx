import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import AppLayout from './AppLayout'
import FetchOldData from './pages/FetchOldData'
import FetchRquerydata from './pages/FetchRquerydata'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import FetchRquerydataPage from './UI/FetchRquerydataPage'


const App = () => {
const queryClient = new QueryClient();




const router = createBrowserRouter([
  {
    path : "/",
    element : <AppLayout/>,
    children : [
      {
         path : "/",
         element : <Home/>,
      },
       {
         path : "/about",
         element : <About/>,
      },
     {
         path : "/services",
         element : <Services/>,
      },
      {
         path : "/fetchOldData",
         element : <FetchOldData/>,
      },
      {
         path : "/fetchRquerydata",
         element : <FetchRquerydata/>,
      },
      {
         path : "/fetchRquerydata/:id",
         element : <FetchRquerydataPage/>,
      },
      {
         path : "/contact",
         element : <Contact/>,
      }
    ]
  }

])

return (
  <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
       <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
)
}

export default App