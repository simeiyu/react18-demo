import React from 'react'
import { Typography } from "antd"
import { ExclamationCircleFilled } from '@ant-design/icons'

const { Text } = Typography

const Percent = ({percent=0}) => {
  if (percent >= 90) return <Text type='danger'>{percent}% <ExclamationCircleFilled /></Text>
  if (percent >= 70) return <Text type='warning'>{percent}% <ExclamationCircleFilled /></Text>
  return <Text>{percent}%</Text>
}

export default Percent
