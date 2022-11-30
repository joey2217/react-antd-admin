import React, { Suspense } from 'react'
import { createBrowserRouter, Outlet } from 'react-router-dom'
import RequireAuth from './components/RequireAuth'
import Layout from './layout'
import Login from './pages/login'
import Error from './pages/error'
import NoMatch from './pages/error/404'
import Home from './pages/home'

const Table = React.lazy(() => import('./pages/table'))
const Form = React.lazy(() => import('./pages/form'))
const Menu = React.lazy(() => import('./pages/menu'))
const Markdown = React.lazy(() => import('./pages/editor/markdown'))
const RichText = React.lazy(() => import('./pages/editor/rich-text'))

const Loading = () => <div>Loading</div>

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
      {
        path: 'table',
        element: (
          <Suspense fallback={<Loading />}>
            <Table />
          </Suspense>
        ),
      },
      {
        path: 'form',
        element: (
          <Suspense fallback={<Loading />}>
            <Form />
          </Suspense>
        ),
      },
      {
        path: 'nested-menu/*',
        element: (
          <Suspense fallback={<Loading />}>
            <Menu />
          </Suspense>
        ),
      },
      {
        path: 'text-editor',
        element: <Outlet />,
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<Loading />}>
                <Markdown />
              </Suspense>
            ),
          },
          {
            path: 'markdown',
            element: (
              <Suspense fallback={<Loading />}>
                <Markdown />
              </Suspense>
            ),
          },
          {
            path: 'rich-text',
            element: (
              <Suspense fallback={<Loading />}>
                <RichText />
              </Suspense>
            ),
          },
        ],
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
//         <Route path="table" element={
//            <React.Suspense fallback={<div>Loading</div>}>
//               <Table />
//            </React.Suspense>
//         } />

//       </Route>
//       <Route path="/login" element={<Login />} />
//       <Route path="*" element={<NoMatch />} />
//     </>
//   )
// )

export default router
