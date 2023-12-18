// 一般对象
interface IObj {
  a: number;
  b: any;
  readonly c?: string | number; // 只读可选属性
  d?: number[];
  nest: {
    [propName: string]: any; // 其他属性
  },
  [propName: string]: any, // 其他属性
  age: number
}

let obj: IObj = {
  a: 1,
  b: 'wq',
  c: 1,
  nest: {
    f: 1
  },
  E: 2,
  age: 20
}


let a: object = {
  a: 1,
  b: 2,
}


// 函数
interface IFunc {
  (a: number, b: number): number
}



let test: IFunc = (a, b) => {
  return a + b
}

// function test (a: number, b:number): number {
//   return a + b
// }
console.log(test(1, 2))

let test1 = (a: number, b: number): number => {
  return a + b
}


// 数组继承
interface ILikeArr {
  length: number
}
// 定义数组接口
interface IArr extends ILikeArr {
  [index: number]: number | string
}
let arr11: IArr = {
  0: 1,
  1: 2,
  length: 2
}





interface User {
  id:number,
  name:string,
  age:number,
  grades:string
}
const userList:User[]=[
  {id:1,name:"小明",age:20,grades:'98'},
  {id:2,name:"小明",age:20,grades:'98'},
  {id:3,name:"小明",age:20,grades:'98'},
  {id:4,name:"小明",age:20,grades:'98'}
]


// 继承

interface IA {
  number: number
}
interface IB extends IA {
  age: number
}
const a111: IB = {
  number: 1,
  age: 2
}


// 接口描述元素
interface ITuple {
  0: number,
  1?: string,
  length: 2 | 1
}
const arr12: ITuple = [123]



// 类型别名
interface A {}
interface B {}
interface c extends A,B{}  //  interface c extends D{}
type D = A & B // 交叉类型    =》 type D = A | B 联合类型



// 混合类型，一个对象同时做函数和对象使用
interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}
function getName() :Counter {
  let counter = function(start:number) {} as Counter;
  counter.interval = 123;
  counter.reset = () => {};
  return counter
  
}