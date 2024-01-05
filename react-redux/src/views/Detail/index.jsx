import { useParams } from 'react-router-dom';
import http from "@/utils/http.js"
import { useEffect, useState } from 'react';
import { useGetPhoneInfo } from '../../hooks';

const Detail = () => {
  const { id } = useParams(),
    list = useGetPhoneInfo(id)
  console.log(list)
  return (
    <div>
      <div> {list?.name} </div>
      <div> {list?.price} </div>
      <div> {list?.detail} </div>
    </div>
  )
}


export default Detail