import { useEffect, useState } from "react";
import store from "../store";
import { listAction } from "../store/action";

function useProductList() {
  const [productList, setProductList] = useState([])
  useEffect(() => {
    const _productList = store.getState().productList
    if (_productList) {
      store.dispatch(listAction())
    } else {
      setProductList(productList)
    }
    const unsubscribe = store.subscribe(() => {
      setProductList(store.getState().productList)
    })
    return () => {
      unsubscribe()
    }
  }, [])
  return productList
}



const useGetHotOrHighList = (type) => {
  const list = useProductList(),
    isHot = type === 1 ? true : false  
  return list.filter(item => item.isHot === isHot)
}
const useGetPhoneInfo = (id) => {
  const list = useProductList()
  return list.find(item => item.id == id)
}
export  { useProductList, useGetHotOrHighList, useGetPhoneInfo }