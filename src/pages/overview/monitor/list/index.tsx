import React, { useState } from 'react'
import { Card, Divider } from 'antd'
import { Link } from 'react-router-dom'
import { LeftOutlined } from '@ant-design/icons'
import ClustersTable from './ClustersTable'
import AccountTable from './AccountTable'
import styles from '../index.module.less'

const tabList = [
  { key: 'clusters', tab: '集群资源管理' },
  { key: 'account', tab: '账户资源监控' },
]

const contentList: Record<string, React.ReactNode> = {
  clusters: <ClustersTable />,
  account: <AccountTable />,
}

const List = () => {
  const [activeTabKey, setActiveTabKey] = useState<string>('clusters')
  return <Card
    className={styles.card}
    bordered={false}
    tabList={tabList}
    activeTabKey={activeTabKey}
    onTabChange={key => setActiveTabKey(key)}
    extra={
      <div className={styles.extra}>
        <Link to={'../'}><LeftOutlined /> 返回上级</Link>
        <Divider className={styles.divider} type='vertical' />
      </div>
    }
  >
    { contentList[activeTabKey] }
  </Card>
}

export default List
