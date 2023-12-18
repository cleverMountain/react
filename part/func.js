"use strict";
// 函数注解
function tset1(x, y) {
    return x + y;
}
let test1111 = function (x, y) {
    let a = 1;
    return x + y + a;
};
let test11111 = (x, y) => {
    return (x, y) => x + y;
};
let test112 = (x, y) => x + y;
let test113 = (x, y) => x + y;
const funcA1 = (data) => {
    return Object.prototype.toString.call(data) == '[object Array]' ? true : false;
};
const func1B = (data) => {
    return Object.prototype.toString.call(data) == '[object Array]' ? true : false;
};
