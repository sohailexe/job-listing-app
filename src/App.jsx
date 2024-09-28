import React from 'react'
import {Route, createBrowserRouter,createRoutesFromElements,RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import MainLayout from './layouts/MainLayout'
const router  = createBrowserRouter(

  createRoutesFromElements(
    <Route path='/' element={<MainLayout />} >
      <Route index element={<Home />} />
    </Route>
  )

)

const App = () => {
  return (
     <RouterProvider router={router}/>
  )
}
 
export default App