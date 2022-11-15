import React from 'react'
import { Navigate, useRoutes, RouteObject } from 'react-router-dom'
import Layout from "@/layout"
import PageError from '@pages/pageError'
import Explore, { Scene, Default } from '@pages/explore'
import Overview, { Graphic, List } from '@pages/overview'
import Algo from '@pages/algo'
import Predict from '@pages/predict'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [{
      index: true,
      // path: 'explore',
      element: <Explore />,
      // children: [
      //   // { index: true, element: <Default /> },
      //   { path: 'scene', element: <Scene /> },
      // ]
    }, {
      path: 'scene', element: <Scene />
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
    }],
  }, {
    path: '*',
    element: <PageError />
  }
]

export default () => useRoutes(routes)
