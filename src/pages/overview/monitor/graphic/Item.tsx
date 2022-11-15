import React from 'react'
import Graphic from './Graphic'
import styles from './index.module.less'

interface ItemProps {
  label: string;
  used: number;
  total: number;
  unit: string;
}

const Item:React.FC<ItemProps> = ({label='', used, total, unit}) => {
  const percent = Math.round(used / total * 100)
  return <div className={styles.graphic}>
    <div className={styles.info}>
      <label className={styles.label}>{label}</label>
      <div className={styles.value}>
        <span className={styles.used}>{used}</span>
        <span className={styles.total}>{total}</span>
        <span className={styles.unit}>{unit}</span>
      </div>
    </div>
    <Graphic percent={percent} />
  </div>
}

export default Item
