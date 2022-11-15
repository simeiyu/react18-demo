import React from 'react'
import { Input } from 'antd'
import AppTable from './components/AppTable'
import { useEffect, useState } from 'react'
import IconFont from '@comps/IconFont'
import styles from './index.module.less'

export default () => {
  const [searchKey, setSearchKey] = useState<string>('')

  useEffect(() => {
    // 过滤表格数据
  }, [searchKey])

  return <div className={styles.metrics}>
    <Input
      className={styles.search}
      suffix={<IconFont className={styles.icon} type='icon-sousuo2' />}
      value={searchKey}
      allowClear
      onPressEnter={(e) => setSearchKey(e.target.value)}
    />
    <AppTable />
  </div>
}