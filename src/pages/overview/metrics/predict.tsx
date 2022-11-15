import React from 'react'
import { Input } from 'antd'
import AppTable, { Item } from './components/AppTable'
import { useEffect, useState } from 'react'
import IconFont from '@comps/IconFont'
import styles from './index.module.less'


const predictData: Item[] = [
  {
      "appId": 58528,
      "appName": "suanpan_link",
      "status": "Running",
      "age": "46h",
      "resources": {
          "cpu": 49,
          "mem": 769
      }
  },
  {
      "appId": 61997,
      "appName": "demo",
      "status": "Running",
      "age": "41h",
      "resources": {
          "cpu": 13,
          "mem": 588
      }
  },
  {
      "appId": 62321,
      "appName": "青岛四方",
      "status": "Running",
      "age": "13d",
      "resources": {
          "cpu": 3,
          "mem": 306
      }
  },
  {
      "appId": 63075,
      "appName": "降阶工具集1.0版本-组件制作",
      "status": "Running",
      "age": "13d",
      "resources": {
          "cpu": 13,
          "mem": 3515
      }
  },
  {
      "appId": 63425,
      "appName": "MQTT（fake data）",
      "status": "Running",
      "age": "152d",
      "resources": {
          "cpu": 5,
          "mem": 238
      }
  },
  {
      "appId": 63588,
      "appName": "数据转换",
      "status": "Running",
      "age": "6d16h",
      "resources": {
          "cpu": 3,
          "mem": 288
      }
  },
  {
      "appId": 63701,
      "appName": "尺子",
      "status": "Running",
      "age": "13d",
      "resources": {
          "cpu": 10,
          "mem": 1621
      }
  },
  {
      "appId": 64266,
      "appName": "模型降阶测试",
      "status": "Running",
      "age": "44h",
      "resources": {
          "cpu": 12,
          "mem": 2696
      }
  },
  {
      "appId": 64335,
      "appName": "工时填写提醒",
      "status": "Running",
      "age": "65d",
      "resources": {
          "cpu": 4,
          "mem": 286
      }
  },
  {
      "appId": 64966,
      "appName": "测试111",
      "status": "Running",
      "age": "5d19h",
      "resources": {
          "cpu": 3,
          "mem": 259
      }
  },
  {
      "appId": 65299,
      "appName": "新优化算法联调+余姚工厂模型_逆序对排序",
      "status": "Running",
      "age": "1m",
      "resources": {
          "cpu": 177,
          "mem": 2327
      }
  },
  {
      "appId": 65305,
      "appName": "吉利全厂优化_cpu",
      "status": "Running",
      "age": "2d19h",
      "resources": {
          "cpu": 72,
          "mem": 2089
      }
  },
  {
      "appId": 65492,
      "appName": "潍柴动力系统数字孪生-复合后",
      "status": "Running",
      "age": "7d14h",
      "resources": {
          "cpu": 87,
          "mem": 1883
      }
  },
  {
      "appId": 65493,
      "appName": "新优化算法联调+余姚工厂模型_逆序对排序_3_2",
      "status": "Running",
      "age": "2d18h",
      "resources": {
          "cpu": 228,
          "mem": 4647
      }
  },
  {
      "appId": 65819,
      "appName": "新优化算法联调+余姚工厂模型_逆序对排序_2",
      "status": "Running",
      "age": "5d18h",
      "resources": {
          "cpu": 1061,
          "mem": 1981
      }
  },
  {
      "appId": 65868,
      "appName": "DES-普通测试",
      "status": "Running",
      "age": "7d20h",
      "resources": {
          "cpu": 4,
          "mem": 303
      }
  },
  {
      "appId": 66029,
      "appName": "pub-sub-node",
      "status": "Running",
      "age": "5d18h",
      "resources": {
          "cpu": 5,
          "mem": 392
      }
  },
  {
      "appId": 66076,
      "appName": "通用打包遗传算法+余姚工厂模型_订单切换",
      "status": "Running",
      "age": "7d14h",
      "resources": {
          "cpu": 1073,
          "mem": 2354
      }
  },
  {
      "appId": 66204,
      "appName": "工作流_数据处理测试_2",
      "status": "Running",
      "age": "6d17h",
      "resources": {
          "cpu": 10,
          "mem": 541
      }
  },
  {
      "appId": 66265,
      "appName": "amesim_fluent联合仿真",
      "status": "Running",
      "age": "8d",
      "resources": {
          "cpu": 18,
          "mem": 1353
      }
  },
  {
      "appId": 66295,
      "appName": "gis",
      "status": "Running",
      "age": "6d19h",
      "resources": {
          "cpu": 3,
          "mem": 161
      }
  },
  {
      "appId": 66385,
      "appName": "test2",
      "status": "Running",
      "age": "13d",
      "resources": {
          "cpu": 4,
          "mem": 307
      }
  },
  {
      "appId": 66402,
      "appName": "运维决策",
      "status": "Running",
      "age": "12d",
      "resources": {
          "cpu": 5,
          "mem": 277
      }
  },
  {
      "appId": 66410,
      "appName": "碳载量",
      "status": "Running",
      "age": "9d",
      "resources": {
          "cpu": 6,
          "mem": 323
      }
  },
  {
      "appId": 66503,
      "appName": "余姚模型（测试）-20221019 锁车",
      "status": "Running",
      "age": "9d",
      "resources": {
          "cpu": 14,
          "mem": 1130
      }
  },
  {
      "appId": 66508,
      "appName": "共工相关脚本",
      "status": "Running",
      "age": "9d",
      "resources": {
          "cpu": 4,
          "mem": 582
      }
  },
  {
      "appId": 66509,
      "appName": "吉利排产demo_3",
      "status": "Running",
      "age": "6d16h",
      "resources": {
          "cpu": 5,
          "mem": 709
      }
  },
  {
      "appId": 66516,
      "appName": "des",
      "status": "Running",
      "age": "9d",
      "resources": {
          "cpu": 4,
          "mem": 1104
      }
  },
  {
      "appId": 66519,
      "appName": "钱江制冷des 1101",
      "status": "Running",
      "age": "8d",
      "resources": {
          "cpu": 34,
          "mem": 2069
      }
  },
  {
      "appId": 66530,
      "appName": "test-des",
      "status": "Running",
      "age": "8d",
      "resources": {
          "cpu": 3,
          "mem": 249
      }
  },
  {
      "appId": 66537,
      "appName": "供应链demo",
      "status": "Running",
      "age": "8d",
      "resources": {
          "cpu": 5,
          "mem": 430
      }
  },
  {
      "appId": 66538,
      "appName": "供应链仿真",
      "status": "Running",
      "age": "8d",
      "resources": {
          "cpu": 8,
          "mem": 537
      }
  },
  {
      "appId": 66550,
      "appName": "余姚模型（测试）-20221019 锁车 (1)",
      "status": "Running",
      "age": "7d18h",
      "resources": {
          "cpu": 15,
          "mem": 1337
      }
  },
  {
      "appId": 66564,
      "appName": "通用打包遗传算法+余姚工厂模型_订单切换_2",
      "status": "Running",
      "age": "6d23h",
      "resources": {
          "cpu": 1080,
          "mem": 5760
      }
  },
  {
      "appId": 66568,
      "appName": "开关与灯测试_double",
      "status": "Running",
      "age": "6d22h",
      "resources": {
          "cpu": 2,
          "mem": 143
      }
  },
  {
      "appId": 66581,
      "appName": "吉利共工测试1",
      "status": "Running",
      "age": "5d23h",
      "resources": {
          "cpu": 6,
          "mem": 344
      }
  }
]

export default () => {
  const [searchKey, setSearchKey] = useState<string>('')

  useEffect(() => {
    // 过滤表格数据
  }, [searchKey])

  return <div className={styles.metrics}>
    <Input
      className={styles.search}
      suffix={<IconFont className={styles.icon} type='icon-sousuo2' />}
      value={searchKey}
      allowClear
      onPressEnter={(e) => setSearchKey(e.target.value)}
    />
    <AppTable data={predictData} />
  </div>
}