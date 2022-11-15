import React, { useState } from 'react'
import { Card } from 'antd'
import Predict from './predict'
import Algo from './algo'

const tabList = [{
  key: 'predict', tab: '应用开发'
}, {
  key: 'algo', tab: '机器学习'
}]

const tabContent: Record<string, React.ReactNode>  = {
  predict: <Predict />,
  algo: <Algo />,
}

const Metrics = () => {
  const [activeTabKey, setActiveTabKey] = useState<string>('predict')
  return <Card 
    bordered={false}
    tabList={tabList}
    activeTabKey={activeTabKey}
    onTabChange={key => setActiveTabKey(key)}
  >
    { tabContent[activeTabKey] }
  </Card>
}

export default Metrics
