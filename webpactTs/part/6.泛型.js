"use strict";
// 泛型： 类型变量
function func1(arg) {
    return arg;
}
func1(1);
func1('1');
// 函数声明方式
function identity(arg) {
    return arg;
}
let myIdentity = identity; // 对象字面量写法
let myIdentity1 = identity; // 函数写法
let myIdentity12 = identity;
let ccc = {
    a: {
        age: '12',
        num: 2,
    }
};
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
// 方法二
function loggingIdentity1(arg) {
    console.log(arg.length);
    return arg;
}
// 
function getProperty(obj, key) {
    return obj[key];
}
let x = { a: 1, b: 2 };
getProperty(x, 'a');
getProperty(x, 'a');
