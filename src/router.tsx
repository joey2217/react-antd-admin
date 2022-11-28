import { createBrowserRouter } from 'react-router-dom'
import Layout from './layout'
import Login from './pages/login'
import Error from './pages/error'
import NoMatch from './pages/error/404'
import Home from './pages/home'
import RequireAuth from './components/RequireAuth'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <RequireAuth>
        <Layout />
      </RequireAuth>
    ),
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '*',
    element: <NoMatch />,
  },
])

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <>
//       <Route path="/" element={<Layout />} errorElement={<Error />}>
//         <Route index element={<Home />} />
//         <Route
//           path="about"
//           element={
//             <React.Suspense fallback={<>...</>}>
//               <Home />
//             </React.Suspense>
//           }
//         />
//       </Route>
//       <Route path="/login" element={<Login />} />
//       <Route path="*" element={<NoMatch />} />
//     </>
//   )
// )

export default router
