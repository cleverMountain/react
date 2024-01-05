const express = require('express')
const bodyParser = require('body-parser');

const server = express()
server.use(bodyParser.json()); // 解析JSON格式的请求体
server.use(bodyParser.urlencoded({ extended: true })); // 解析URL编码的请求体
server.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header("Access-Control-Request-Methods", "POST,GET");
  next()
})
const products = [
  {
    id: 1,
    name: '华为1',
    isHot: true,
    price: '1300',
    detail : '至尊'
  },
  {
    id: 2,
    name: '华为1',
    isHot: false,
    price: '1300',
    detail : '至尊'
  },
  {
    id: 3,
    name: '华为3',
    isHot: true,
    price: '1300',
    detail : '至尊'
  },
  {
    id: 4,
    name: '小米1',
    isHot: true,
    price: '1300',
    detail : '至尊'
  },
  {
    id: 5,
    name: '小米2',
    isHot: false,
    price: '1300',
    detail : '至尊'
  },
  {
    id: 6,
    name: '小米3',
    isHot: true,
    price: '1300',
    detail : '至尊'
  },
]
server.post('/products', (req, res) => {
  res.json(products)
})
server.post('/phoneInfo', (req, res) => {
  const { id } = req.body;
  console.log(id)
  res.json(products)
})
server.listen(4000, () => {
  console.log('http://localhost:4000')
})