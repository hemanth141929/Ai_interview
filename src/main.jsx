import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Feedback from './pages/Feedback.jsx'
import Interview from './pages/Interview.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {path:"/", element:<Navbar/>,children:[
  {path:"/home", element:<Home/>},
  {path:"/interview", element:<Interview/>},
    {path:"/feedback", element:<Feedback/>},
  ]}]
  )
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
