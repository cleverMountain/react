/**
 * | 联合类型 或 交集取其一
 * & 交叉类型 和 并集取两者
 */


// 1
interface A {
  a: 1,
  b: 2,
  c: 3
}
interface B {
  a: 1,
  b: 2,
  d: 3
}

type C = A | B

let c: C = {} as C


// 2
interface obj {
  a: number,
  n: string
}
interface other {
  nest: {
    [propName: string]: string
  }
}

type d = obj & other
let dd: d = {} as d
dd.nest.a = '1'



// 类型收窄
// typeof 
// 真值 
// 等值 等式

function isNumber(x: any): x is number {
  return typeof x === "number";
}
