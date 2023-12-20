import React, { ChangeEvent } from "react"
import { Button, Input, DatePicker, Select, Space, Table, Tag } from "antd"
import type { ColumnsType } from 'antd/es/table';
const { RangePicker } = DatePicker;
import "./index.less"
import { useState } from "react";
// import http from "../../utils/axios"
import { useEffect } from "react";


interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];
const StopCheck: React.FC = () => {
  interface stateSelectObj {
    value?: string,
    label?: string
  }
  const [stateSelect, setStateSelect] = useState<stateSelectObj[]>([])
  const [queryString, setQueryString] = useState<string>('')
  const fetchStateSelectData = () => {
    setTimeout(() => {
      const optiops = [
        {
          value: '1',
          label: '已完成'
        },
        {
          value: '2',
          label: '未完成'
        }
      ]
      setStateSelect(optiops)
    }, 400)
  }
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
 
    setQueryString(e.target.value)
  }
  const handleSelectChange = (value:string | undefined ) => {
  
  }
  const handleTimeChange = (time: Array<object>) => {
     console.log(time[0])
  }
  useEffect(() => {
    fetchStateSelectData()
  }, [])
  return (
    <div className="stop-check">
      <div className="top">
        <Button type="primary">新建</Button>
        <Button style={{ marginLeft: '20px' }}>导入</Button>
      </div>
      <div className="line"></div>
      <div className="bottom">
        <div className="query">
          <div className="string">
            <div className="title">查询条件:</div>
            <Input style={{ width: '290px', height: '32px' }} value={queryString} onChange={handleInputChange}></Input>
          </div>
          <div className="string" style={{ marginLeft: '24px' }}>
            <div className="title">查询时间:</div>
            <RangePicker onChange={handleTimeChange} style={{ width: '290px', height: '32px' }} />
          </div>
          <div className="string" style={{ margin: '0 24px' }}>
            <div className="title">查询状态:</div>
            <Select
              style={{ width: '290px', height: '32px' }}
              allowClear
              placeholder='请选择选项'
              onChange={handleSelectChange}
              options={stateSelect}
            />
          </div>
        </div>
        <div className="table">
          <Table columns={columns} dataSource={data} />
        </div>
      </div>
    </div>
  )
}

export default StopCheck