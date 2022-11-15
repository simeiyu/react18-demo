import React from 'react' 
import { Outlet } from 'react-router-dom'
import Aside from './aside'
import Header from './header'
import styles from './index.module.less'

export default function () {
  return <section className={styles.layout}>
    <Header />
    <Aside />
    <main className={styles.content}>
      <Outlet />
    </main>
  </section>
}

