import React from 'react'
import { ConfigProvider, theme } from 'antd'
import { useTheme } from './hooks/useTheme'
import { RouterProvider } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import router from './router'

const { darkAlgorithm, defaultAlgorithm } = theme

const App: React.FC = () => {
  const [theme] = useTheme()
  return (
    <ConfigProvider
      theme={{
        algorithm: theme === 'dark' ? darkAlgorithm : defaultAlgorithm,
      }}
    >
      <RecoilRoot>
        <RouterProvider router={router} />
      </RecoilRoot>
    </ConfigProvider>
  )
}

export default App
