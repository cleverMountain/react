// 泛型： 类型变量
function func1<T>(arg: T): T {
  return arg
}

func1<number>(1)
func1<string>('1')

// 函数声明方式

function identity<T>(arg: T): T {
  return arg;
}

let myIdentity: { <T>(arg: T): T } = identity; // 对象字面量写法
let myIdentity1: <T>(arg: T) => T = identity; // 函数写法


// 接口泛型

interface GenericIdentityFn<T> {
  (arg: T): T;
}

let myIdentity12: GenericIdentityFn<number> = identity;

interface Aaa<T> {
  a: T
}

interface Ibb {
  age: string,
  num: number
}

let ccc: Aaa<Ibb> = {
  a: {
    age: '12',
    num: 2,
  }
}



// 泛型约束
interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);  
  return arg;
}

// 方法二
function loggingIdentity1<T>(arg: T[]): T[] {
  console.log(arg.length);  
  return arg;
}


// 
function getProperty<T, K extends keyof T> (obj: T, key: K) {
  return obj[key]
}

let x = {a: 1, b: 2}
type XType = typeof x
type keyOfType = keyof XType
getProperty(x, 'a')
getProperty<XType, keyOfType>(x, 'a')