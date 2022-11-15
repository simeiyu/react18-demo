import React from 'react'
import Logo from './Logo'
import Profile from './Profile'
import styles from './index.module.less'

export default () => <section className={styles.header}>
  <Logo />
  <Profile />
</section>

