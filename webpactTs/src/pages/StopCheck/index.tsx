import React, { ChangeEvent } from "react"
import dayjs, { Dayjs } from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { Button, Input, DatePicker, Select, Space, Table, Tag } from "antd"
import type { ColumnsType } from 'antd/es/table';
const { RangePicker } = DatePicker;
import "./index.less"
import { useState, useEffect } from "react";
import http from "../../utils/axios"


interface DataType {
  person: string;
  level: number;
  status: number;
  key: number
}
interface ParamsObj {
  startTime: string,
  endTime: string,
  queryString: string,
  selectValue: string | undefined
}
const columns: ColumnsType<DataType> = [
  {
    title: '盘点人',
    dataIndex: 'person',

  },
  {
    title: '问题等级',
    dataIndex: 'level',
    render: (_, record) => {

      let status: Array<Array<string>> = [
        ['等级1', 'level-one'],
        ['等级2', 'level-two'],
        ['等级3', 'level-three']
      ],
        className: string = 'level-bg',
        content: string = status[record.status - 1][0],
        otherClaaName: string = ' ' + status[record.status - 1][1];
      className += otherClaaName
      return (
        <div className={className}>{content}</div>
      )
    }
  },
  {
    title: '是否闭环',
    dataIndex: 'status',
  },
  {
    title: '操作',
    dataIndex: 'operate',
    render: (_, record) => {
      return (
        <a>删除</a>
      )
    }
  }
];
const data: DataType[] = [
  {
    person: '夏利1',
    level: 1,
    status: 1,
    key: 1,
  },
  {
    person: '夏利2',
    level: 2,
    status: 2,
    key: 2,
  },
  {
    person: '夏利3',
    level: 3,
    status: 3,
    key: 3
  }
];
const StopCheck: React.FC = () => {
  interface stateSelectObj {
    value: string,
    label: string,
  }

  const [stateSelect, setStateSelect] = useState<stateSelectObj[]>([])
  const [queryString, setQueryString] = useState<string>('')
  const [timeString, setTimeString] = useState<string[]>([])
  const [selectValue, setSelectValue] = useState<string | undefined>('')
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
  const handleSelectChange = (value: string | undefined) => {
    setSelectValue(value)
  }
  const handleTimeChange = (time: any) => {
    if (time) {
      console.log(time[0].format('YYYY-MM-DD'), time[1].format('YYYY-MM-DD'))
      setTimeString([time[0].format('YYYY-MM-DD'), time[1].format('YYYY-MM-DD')])
    }
  }
  const fetchTableData = (): void => {
    const startTime: string = timeString[0] || '',
      endTime: string = timeString[1] || '',
      params: ParamsObj = Object.create(null);
    params['queryString'] = queryString
    params['startTime'] = startTime
    params['endTime'] = endTime
    params['selectValue'] = selectValue
    console.log(params)
  }
  const upload = () => {
    http.post('/aaa')
  }
  useEffect(() => {
    fetchStateSelectData()
  }, [])
  useEffect(() => {
    fetchTableData()
  }, [timeString, queryString, selectValue])
  return (
    <div className="stop-check">
      <div className="top">
        <Button type="primary">新建</Button>
        <Button style={{ marginLeft: '20px' }} onClick={upload}>导入</Button>
      </div>
      <div className="line"></div>
      <div className="bottom">
        <div className="query">
          <div className="string">
            <div className="title">查询条件:</div>
            <Input
              style={{ width: '290px', height: '32px' }}
              value={queryString}
              onChange={handleInputChange}
            />
          </div>
          <div className="string" style={{ marginLeft: '24px' }}>
            <div className="title">查询时间:</div>
            <RangePicker
              onChange={handleTimeChange}
              style={{ width: '290px', height: '32px' }}
            />
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