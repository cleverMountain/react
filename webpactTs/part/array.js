"use strict";
let arr = [1, 2]; // 全是number
let arr1 = ['a', 'b']; // 全是string
let arr2 = [undefined]; // 没有类型
let arr3 = [undefined, null, 'str', 123]; // 任意类型
// 联合类型
let arr4 = [1, 2, 'string'];
let arr5 = [[1, [1]], 'stri'];
// 元组 可选元素
let arr6 = [1, '12'];
let arr7 = [1, 2, 3];
arr6.push(10);
console.log(arr6);
