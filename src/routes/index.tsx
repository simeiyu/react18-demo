import React from 'react'
import { Navigate, useRoutes, RouteObject } from 'react-router-dom'
import Layout from "@/layout"
import PageError from '@pages/pageError'
import Explore, { Scene, Default } from '@pages/explore'
import Overview, { Graphic, List } from '@pages/overview'
import Algo from '@pages/algo'
import Predict from '@pages/predict'

// path 开头为 / 的为绝对路径，反之为相对路径
const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to='/explore' replace />
  },
  {
    path: '/web',
    element: <PageError />
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'explore',
        element: <Explore />,
        children: [
          { index: true, element: <Default /> },
          { path: 'scene', element: <Scene /> },
        ]
      }, {
        path: 'overview',
        element: <Overview />,
        children: [
          { index: true, element: <Graphic /> },
          { path: 'list', element: <List /> },
        ]
      }, {
        path: 'algo',
        element: <Algo />
      }, {
        path: 'predict',
        element: <Predict />
      }
    ],
  }, {
    path: '/login',
    element: <PageError />
  }, {
    path: '*',
    element: <PageError />
  }
]

export default () => useRoutes(routes)
