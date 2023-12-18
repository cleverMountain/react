// abstract抽象类，不可以创建实例，只能extends继承
abstract class Greeter {
  greeting: string;
  // 实例上的属性
  constructor(message: string) {
    this.greeting = message;
  }
  // 原型上的方法
  greet(): string {
    return "Hello, " + this.greeting;
  }
  // 静态属性，类上的属性
  static age: number = 12
  // 抽象方法
  abstract sayHello(): void
}

// let greeter = new Greeter("world");
// console.log(greeter)
/**
 * public 公共属性：都可用， 自身 子类 实例
 * private 私有属性  子类可用
 * static 静态属性 自身可用
 * protected 受保护的  自身和子类可用
 */


class Gee extends Greeter {
  age: number
  constructor (age:number) {
    super('我是父亲')
    this.age = age
  }
  sayHello(): void {
    
  }
}