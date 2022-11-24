import React from 'react'
import { ConfigProvider, theme } from 'antd'
import { RouterProvider } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import zhCN from 'antd/locale/zh_CN'
import en from 'antd/locale/en_US'
import { themeState} from './store/atom'
import router from './router'

import { languageState } from './store/atom'

const { darkAlgorithm, defaultAlgorithm } = theme

const App: React.FC = () => {
  const language = useRecoilValue(languageState)
  const theme = useRecoilValue(themeState)
  return (
    <ConfigProvider
      theme={{
        algorithm: theme === 'dark' ? darkAlgorithm : defaultAlgorithm,
      }}
      locale={language === 'zhCN' ? zhCN : en}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  )
}

export default App
