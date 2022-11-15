import React from 'react'
import { ArrowRightOutlined } from '@ant-design/icons'
import styles from './index.module.less'

export default () => {
  return <div className={styles.wrapper}>
    <img className={styles.logo} src='/logo.svg' alt='雪浪算盘' />
    <ArrowRightOutlined className={styles.toggle} />
  </div>
}