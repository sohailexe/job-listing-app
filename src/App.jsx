import React from 'react'
import {Route, createBrowserRouter,createRoutesFromElements,RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import MainLayout from './layouts/MainLayout'
import JobsPage from './pages/JobsPage'
import NotFoundPage from './pages/NotFoundPage'


const router  = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />} >
      <Route index element={<Home />} />
      <Route path='/jobs' element={<JobsPage />} />
      <Route path='*' element={<NotFoundPage />} />

    </Route>
  )

)

const App = () => {
  return (
     <RouterProvider router={router}/>
  )
}
 
export default App