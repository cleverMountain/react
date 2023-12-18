"use strict";
/**
 * | 联合类型 或 交集取其一
 * & 交叉类型 和 并集取两者
 */
let c = {};
let dd = {};
dd.nest.a = '1';
// 类型收窄
// typeof 
// 真值 
// 等值 等式
function isNumber(x) {
    return typeof x === "number";
}
