// 函数注解
function tset1(x: number, y: number): number {
  return x + y
}


let test1111 = function (x: number, y: number): number {
  let a: number = 1
  return x + y + a
}


let test11111 = (x: number, y: number): Function => {
  return (x: number, y: number) =>  x + y
}


let test112: (x: number, y: number) => number = (x, y) => x + y



interface ITest {
  (x: number, y: number): number
}

let test113: ITest = (x, y) => x + y
const funcA1 = (data: any): boolean => {
  return Object.prototype.toString.call(data) == '[object Array]' ? true : false
}
const func1B = <T>(data: T): boolean => {
  return Object.prototype.toString.call(data) == '[object Array]' ? true : false
}

