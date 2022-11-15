import React, { Suspense, useContext } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import CustomEmpty from '@comps/CustomEmpty'
import Router from './routes'

function App() {
  return (
    <ConfigProvider locale={zhCN} renderEmpty={() => <CustomEmpty />}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ConfigProvider>
  )
}

export default App
