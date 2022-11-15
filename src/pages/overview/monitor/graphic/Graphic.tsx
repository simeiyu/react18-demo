import React, { useEffect, useState } from "react"
import { Progress } from "antd"
import type { ProgressGradient } from "antd";

type Status = 'danger' | 'warning' | 'primary'

type StrokeType = {
  [propName in Status]: ProgressGradient;
};

interface PropsType {
  percent: number;
}

const strokeColors: StrokeType = {
  danger: {
    '0%': '#FF8486',
    '100%': '#FF4D4F'
  },
  warning: {
    '0%': '#FDCA33',
    '100%': '#FA9C14'
  },
  primary: {
    '0%': '#61BDFF',
    '100%': '#4684FF'
  }
}

const getStatus: (percent:number) => Status = percent => {
  switch (true) {
    case percent >= 90:
      return 'danger'
    case percent >= 70:
      return 'warning'
    default:
      return 'primary'
  }
}

const Graphic:React.FC<PropsType> = ({percent=0}) => {
  const [status, setStatus] = useState<Status>('primary')

  useEffect(() => {
    setStatus(getStatus(percent))
  }, [percent])

  return <Progress type="circle" width={140} strokeWidth={16} strokeColor={strokeColors[status]} percent={percent} />
}

export default Graphic
