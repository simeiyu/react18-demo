import React from 'react'
import AsideNav from "./AsideNav"
import styles from './index.module.less'


const Aside:React.FC = () => {
  return <section className={styles.aside}>
    <AsideNav />
  </section>
}

export default Aside
