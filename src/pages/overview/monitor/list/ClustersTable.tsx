import React from 'react'
import { Table } from 'antd'
import Percent from './Percent'

interface Item {
  host: string;
  cpu: {
    used: number;
    total: number;
    percent: number;
  },
  mem: {
    used: number;
    total: number;
    percent: number;
  },
  storage: {
    used: number;
    total: number;
    percent: number;
  },
}

interface ClusterProps {
  data: Item[]
}

const columns = [{
    title: '主机名',
    dataIndex: 'host',
    key: 'host'
  }, {
    title: 'CPU占用 (核)',
    dataIndex: 'cpu.used',
    key: 'cpu.used',
    sorter: (a:Item, b:Item) => a.cpu.used - b.cpu.used,
    render: (_:any, record:Item) => record.cpu.used
  }, {
    title: 'CPU总数 (核)',
    dataIndex: 'cpu.total',
    key: 'cpu.total',
    sorter: (a:Item, b:Item) => a.cpu.total - b.cpu.total,
    render: (_:any, record:Item) => record.cpu.total
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
    title: '内存总数 (G)',
    dataIndex: 'mem.total',
    key: 'mem.total',
    sorter: (a:Item, b:Item) => a.mem.total - b.mem.total,
    render: (_:any, record:Item) => record.mem.total
  }, {
    title: '内存占用率',
    dataIndex: 'mem.percent',
    key: 'mem.percent',
    sorter: (a:Item, b:Item) => a.mem.percent - b.mem.percent,
    render: (_:any, record:Item) => <Percent percent={record.mem.percent} />
  }, {
    title: '存储资源使用 (G)',
    dataIndex: 'storage.used',
    key: 'storage.used',
    sorter: (a:Item, b:Item) => a.storage.used - b.storage.used,
    render: (_:any, record:Item) => record.storage.used
  }, {
    title: '存储资源总数 (G)',
    dataIndex: 'storage.total',
    key: 'storage.total',
    sorter: (a:Item, b:Item) => a.storage.total - b.storage.total,
    render: (_:any, record:Item) => record.storage.total
  }, {
    title: '存储资源占用率',
    dataIndex: 'storage.percent',
    key: 'storage.percent',
    sorter: (a:Item, b:Item) => a.storage.percent - b.storage.percent,
    render: (_:any, record:Item) => <Percent percent={record.storage.percent} />
  }]

const ClustersTable: React.FC<ClusterProps> = ({data=[]}) => {
  return <Table columns={columns} dataSource={data} rowKey='host' />
}

ClustersTable.defaultProps = {
  data: [
    {host: 'sp1', cpu: {used: 1.75, total: 8, percent: 48.46}, mem: {used: 860, total: 10000, percent: 44}, storage: {used: 14, total: 100, percent: 99}},
    {host: 'spnext', cpu: {used: 3.16, total: 8, percent: 88.46}, mem: {used: 7545, total: 10000, percent: 77}, storage: {used: 73, total: 100, percent: 48.46}},
    {host: 'sp', cpu: {used: 3.53, total: 8, percent: 48.46}, mem: {used: 386, total: 10000, percent: 48.46}, storage: {used: 3, total: 100, percent: 48.46}},
  ]
}

export default ClustersTable
