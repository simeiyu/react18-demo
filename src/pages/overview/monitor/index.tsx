import React from 'react'
import { Outlet } from "react-router-dom"
import Graphic from "./graphic"
import List from './list'
import styles from './index.module.less'

const Monitor = () => <div className={styles.monitor}><Outlet /></div>

export { Graphic, List }

export default Monitor
