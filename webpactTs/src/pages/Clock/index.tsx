
import React from "react"
import { useEffect } from "react"
import CategoryTree from "./CategoryTree"
import "./index.less"
import http from '../../utils/axios';
import { useState } from "react";
const Clock: React.FC = () => {
  const [treeData, setTreeData] = useState<Array<any>>([])
  const fetchCategory = ():void => {
    http.post('/recordDir/listDir', {id: 'admin'}).then((res: any) => {
      if (res.success) {
        
      }
    })
  }
  useEffect(() => {
    fetchCategory()
  })
  return (
    <div className="file">
      <div className="left">
        <div className="ll-header">
          <div>目录</div>
          <CategoryTree />
        </div>
      </div>
      <div className="right"></div>
    </div>
  )
}

export default Clock