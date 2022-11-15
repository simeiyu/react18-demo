import React from 'react'
import { Table } from 'antd'
import Percent from './Percent'

interface Item {
  userId: string;
  templateNum: number;
  runningTemplateNum: number;
  cpu: {
    used: number;
    percent: number;
  },
  mem: {
    used: number;
    percent: number;
  },
}

interface AccountProps {
  data: Item[]
}

const columns = [{
    title: '用户ID',
    dataIndex: 'userId',
    key: 'userId'
  }, {
    title: '模板数',
    dataIndex: 'templateNum',
    key: 'templateNum',
    sorter: (a:Item, b:Item) => a.templateNum - b.templateNum,
  }, {
    title: '运行中模板数',
    dataIndex: 'runningTemplateNum',
    key: 'runningTemplateNum',
    sorter: (a:Item, b:Item) => a.runningTemplateNum - b.runningTemplateNum,
  }, {
    title: 'CPU占用 (核)',
    dataIndex: 'cpu.used',
    key: 'cpu.used',
    sorter: (a:Item, b:Item) => a.cpu.used - b.cpu.used,
    render: (_:any, record:Item) => record.cpu.used
  }, {
    title: 'CPU占用率',
    dataIndex: 'cpu.percent',
    key: 'cpu.percent',
    sorter: (a:Item, b:Item) => a.cpu.percent - b.cpu.percent,
    render: (_:any, record:Item) => <Percent percent={record.cpu.percent} />
  }, {
    title: '内存占用 (G)',
    dataIndex: 'mem.used',
    key: 'mem.used',
    sorter: (a:Item, b:Item) => a.mem.used - b.mem.used,
    render: (_:any, record:Item) => record.mem.used
  }, {
    title: '内存占用率',
    dataIndex: 'mem.percent',
    key: 'mem.percent',
    sorter: (a:Item, b:Item) => a.mem.percent - b.mem.percent,
    render: (_:any, record:Item) => <Percent percent={record.mem.percent} />
  }]

const AccountTable: React.FC<AccountProps> = ({data=[]}) => {
  return <Table columns={columns} dataSource={data} rowKey='userId' />
}

AccountTable.defaultProps = {
  data: [
    {userId: 'sp1', templateNum: 8, runningTemplateNum: 2, cpu: {used: 1.75, percent: 48.46}, mem: {used: 860, percent: 44}},
    {userId: 'spnext', templateNum: 14, runningTemplateNum: 12, cpu: {used: 3.16, percent: 98.46}, mem: {used: 7545, percent: 77}},
    {userId: 'sp', templateNum: 9, runningTemplateNum: 1, cpu: {used: 3.53, percent: 48.46}, mem: {used: 386, percent: 48.46}},
  ]
}

export default AccountTable
