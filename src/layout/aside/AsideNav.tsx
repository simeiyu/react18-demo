import React from 'react'
import { NavLink } from 'react-router-dom'
import IconFont from '@comps/IconFont'
import styles from './index.module.less'

interface AsideMenuProps {
  theme?: 'dark' | 'light';
}

interface MenuItem {
  id: string;
  label: string;
  icon: string;
}

const items: MenuItem[] = [
  { id: '/', label: '探索', icon: 'icon-tansuo1' },
  { id: 'overview', label: '概览', icon: 'icon-gailan1' },
  { id: 'predict', label: '应用开发', icon: 'icon-yingyongkaifa1' },
  { id: 'algo', label: '机器学习', icon: 'icon-jiqixuexi1' }
]

const AsideNav: React.FC<AsideMenuProps> = ({}) => {
  return <nav className={styles.nav}>
    {
      items.map(({id, label, icon }) => <NavLink
        className={
          ({ isActive }) => [styles.item, isActive ? styles.active : null].filter(Boolean).join(' ')
        }
        to={id}
        key={id}
      >
        <IconFont type={icon} /><span className={styles.label}>{label}</span>
      </NavLink>)
    }
  </nav>
}

export default AsideNav 
