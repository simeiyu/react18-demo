import React from 'react'
import { UserOutlined, DownloadOutlined, SnippetsOutlined } from '@ant-design/icons'
import { Dropdown } from 'antd'
import type { MenuProps } from 'antd'
import userProfile from '@assets/images/user.png'
import styles from './index.module.less'

export default ({userId='', username=''}) => {
  const items: MenuProps['items'] = [
    { key: 'username', label: `${username}(${userId})`, icon: <UserOutlined /> },
    { key: 'downloadRPA', label: '下载客户端', icon: <DownloadOutlined /> },
    { key: 'userGuide', label: '帮助文档', icon: <SnippetsOutlined /> },
  ]

  return <Dropdown
    placement='bottomRight'
    overlayClassName={styles.menu}
    // getPopupContainer={triggerNode => triggerNode.parentElement}
    menu={{ items }}
  >
    <a className={styles.profile}><img src={userProfile} alt={username} /></a>
  </Dropdown>
}