import React,{useState,useEffect} from 'react'

export default function Use(props) {
    const [num1,changeNum1] = useState(0)
    const [num2,changeNum2] = useState(10)
    //单个-----------------------------------------------------
    //首次加载,修改num1,修改num2,卸载当前组件没有
    useEffect(()=>{
        console.log('只传一个函数')
    })
    //首次加载,num1没有,num2没有,卸载当前组件没有
    useEffect(()=>{
        console.log('参数二传一个空数组')
    },[])
    //首次加载,修改num1,num2没有,卸载当前组件没有
    useEffect(()=>{
        console.log('传参数num1')
    },[num1])
    //首次加载,num1没有,修改num2,卸载当前组件没有
    useEffect(()=>{
        console.log('传参数num2')
    },[num2])
    //首次加载,修改num1,修改num2,卸载当前组件没有
    useEffect(()=>{
        console.log('都传')
    },[num1,num2])
    //首次没有,修改num1,修改num2,卸载组件调用
    useEffect(()=>{
        return ()=>{
            console.log('return方法')
        }
    })
    // 总结:
    // 1.参数1:函数:   初始化和每次修改参数都会触发这个函数
    // 2.参树2:空数组: 只有首次加载会触发
    // 3.参数2:某条数据: 首次加载和修改该数据都会触发
    // 4.参数2:多条数据: 首次加载和修改数组内任意一条数据都会触发
    // 5.参数1:函数返回一个函数: 首次不急在,但是修改任意数值和卸载组件时都会调用
 
  return (
    <div>
      <p>数值1:{num1}<button onClick={()=>changeNum1(num1+1)}>修改数值1</button></p>
      <p>数值2:{num2}<button onClick={()=>changeNum2(num2-1)}>修改数值2</button></p>
    </div>
  )
}