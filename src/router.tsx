import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import Home from './pages/home'
import Login from './pages/login'
import Error from './pages/error'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home />,
//     errorElement: <Error />,
//   },
//   {
//     path: '/login',
//     element: <Login />,
//   },
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} errorElement={<Error />} />
      <Route path="/login" element={<Login />} />
    </>
  )
)

export default router
