import React from 'react'
import { Table } from "antd"
import { ColumnsType } from "antd/lib/table";
import { Link } from "react-router-dom"
import NodeTable from './NodeTable'
import AppStatus from './Status'

export interface Item {
  appId: string | number;
  appName: string;
  age: string;
  status: string;
  resources: {
    cpu: number;
    mem: number;
  }
}

interface PropsType {
  data: Item[]
}

const columns: ColumnsType<Item> = [{
  title: '项目名称',
  dataIndex: 'appName',
  key: 'appName',
  sorter: (a, b) => a.appName.localeCompare(b.appName),
}, {
  title: '项目ID',
  dataIndex: 'appId',
  key: 'appId'
}, {
  title: '项目状态',
  dataIndex: 'status',
  key: 'status',
  sorter: (a, b) => a.status.localeCompare(b.status),
  render: (_:string, record: Item) => <AppStatus status={record.status.toLocaleLowerCase()} />
}, {
  title: '时长',
  dataIndex: 'age',
  key: 'age',
  // sorter: (a, b) => a.age - b.age,
}, {
  title: 'CPU占用（毫核）',
  dataIndex: 'resources',
  key: 'cpu',
  sorter: (a, b) => a.resources.cpu - b.resources.cpu,
  render: (_:string, record: Item) => record.resources.cpu
}, {
  title: '内存占用（毫核）',
  dataIndex: 'resources',
  key: 'mem',
  sorter: (a, b) => a.resources.mem - b.resources.mem,
  render: (_:string, record: Item) => record.resources.mem
}, {
  title: '操作',
  dataIndex: 'action',
  key: 'action',
  render: (_:string, record: Item) => <Link to={`/predict/${record.appId}`}>查看</Link>
}]

const AppTable: React.FC<PropsType> = ({data=[]}) => {

  return <Table
    columns={columns}
    dataSource={data}
    rowKey='appId'
    expandable={{
      expandedRowRender: record => <NodeTable {...record} />
    }}
  />
}

export default AppTable
