import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'antd'
import classnames from 'classnames'
import algoIcon from '@assets/images/overview-algo.svg'
import predictIcon from '@assets/images/overview-predict.svg'
import componentsIcon from '@assets/images/overview-components.svg'
import styles from './index.module.less'

interface SummaryProps {
  appList?: any[];
  components?: any[];
}

interface ItemProps {
  type: string;
  title: string;
  count: number;
  icon: any;
}

const SummaryItem:React.FC<ItemProps> = ({type, title, count, icon}) => 
  <Link to={`/${type}`}>
    <div className={classnames(`${styles.summary}`, `${styles[type]}`)}>
      <h4 className={styles.content}>{count}<small className={styles.title}>{title}</small></h4>
      <img className={styles.icon} src={icon} />
    </div>
  </Link>

const Summary:React.FC<SummaryProps> = (props) => <Card title="资源中心" bordered={false} bodyStyle={{padding: '1.6rem'}}>
    <Card.Grid key='predict' className={styles.grid} hoverable={false}>
      <SummaryItem type='predict' title='应用开发' count={82} icon={predictIcon} />
    </Card.Grid>
    <Card.Grid key='algo' className={styles.grid} hoverable={false}>
      <SummaryItem type='algo' title='机器学习' count={16} icon={algoIcon} />
    </Card.Grid>
    <Card.Grid key='components' className={styles.grid} hoverable={false}>
      <SummaryItem type='components' title='我的组件' count={23} icon={componentsIcon} />
    </Card.Grid>
  </Card>

export default Summary
