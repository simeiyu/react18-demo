import React from 'react'
import { ColumnsType } from "antd/lib/table";
import { Table } from 'antd'
import CustomEmpty from "@comps/CustomEmpty";
import { isEmpty } from 'lodash'

type NodeStatus = 'restarting' | 'running' | 'starting' | 'stopped'

interface NodeItem {
  label: string;
  nodeId: string;
  status: NodeStatus;
  cpu: {
    used: number;
    allot: number;
  },
  mem: {
    used: number;
    allot: number;
  }
}

const columns: ColumnsType<NodeItem> = [{
  title: '节点名称',
  dataIndex: 'label',
  key: 'label'
}, {
  title: '节点ID',
  dataIndex: 'nodeId',
  key: 'nodeId'
}, {
  title: '节点状态',
  dataIndex: 'status',
  key: 'status'
}, {
  title: 'CPU占用（毫核）',
  dataIndex: 'cpu.used',
  key: 'cpu.used',
  sorter: (a, b) => a.cpu.used - b.cpu.used,
  render: (_:string, record: NodeItem) => record.cpu.used
}, {
  title: 'CPU分配（毫核）',
  dataIndex: 'cpu.allot',
  key: 'cpu.allot',
  sorter: (a, b) => a.cpu.allot - b.cpu.allot,
  render: (_:string, record: NodeItem) => record.cpu.allot
}, { 
  title: '内存占用（毫核）',
  dataIndex: 'mem.used',
  key: 'mem.used',
  sorter: (a, b) => a.mem.used - b.mem.used,
  render: (_:string, record: NodeItem) => record.mem.used
}, {
  title: '内存分配（毫核）',
  dataIndex: 'mem.allot',
  key: 'mem.allot',
  sorter: (a, b) => a.mem.allot - b.mem.allot,
  render: (_:string, record: NodeItem) => record.mem.allot
}]

interface PropsType {
  appName: string;
  appId: string | number;
  data: NodeItem[];
  [propName:string]: any;
}

const NodeTable:React.FC<PropsType> = ({appName='', data=[]}) => {
  if (isEmpty(data)) return <CustomEmpty />
  return <Table columns={columns} rowKey='nodeId' dataSource={data} />
}

NodeTable.defaultProps = {
  data: []
}

export default NodeTable
