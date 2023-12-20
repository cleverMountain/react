import { Button, Input, DatePicker } from "antd"
const { RangePicker } = DatePicker;
import React from "react"
import "./index.less"
const StopCheck: React.FC = () => {
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
            <Input style={{width: '290px', height: '32px'}}></Input>
          </div>
          <div className="string" style={{marginLeft: '24px'}}>
            <div className="title">查询时间:</div>
            <RangePicker style={{width: '290px', height: '32px'}} />
          </div>
        </div>
        <div className="table"></div>
      </div>
    </div>
  )
}

export default StopCheck