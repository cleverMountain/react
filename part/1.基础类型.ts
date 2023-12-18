// 基础类型： number boolean string null undefined

let num1: number = 1
let bool1: boolean = false
let str1: string = 'dsa'

let ab: null = null
let cd: undefined = undefined

// 数组
let arr21: (number)[] = [1]
let arr22: Array<string> = ['2']



// 元组
let tuple: [number, string] = [1, '2']


// 枚举,相当于策略模式
enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue'
}
let colorName: string = Color['Blue'];

console.log(colorName)

declare function create(o: object | null): void;

// create({ prop: 0 }); // OK
// create(null); // OK null是任意类型的子类型

// create(42); // Error
// create("string"); // Error
// create(false); // Error
// create(undefined); // Error

// any  任意类型
let anyNumber: any = 1


// void 没有类型，一般用于函数的返回值
const fun11 = (): void => { }



// never 类型表示的是那些永不存在的值的类型
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
  throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
  return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
  while (true) {
  }
}




// 断言
let someValue: any = "this is a string";
// 1.值 as 类型     2.<类型>值         
let strLength: number = (someValue as string).length;
console.log(strLength)

let ddd: number = 1
