"use strict";
let obj = {
    a: 1,
    b: 'wq',
    c: 1,
    nest: {
        f: 1
    },
    E: 2,
    age: 20
};
let a = {
    a: 1,
    b: 2,
};
let test = (a, b) => {
    return a + b;
};
// function test (a: number, b:number): number {
//   return a + b
// }
console.log(test(1, 2));
let test1 = (a, b) => {
    return a + b;
};
let arr11 = {
    0: 1,
    1: 2,
    length: 2
};
const userList = [
    { id: 1, name: "小明", age: 20, grades: '98' },
    { id: 2, name: "小明", age: 20, grades: '98' },
    { id: 3, name: "小明", age: 20, grades: '98' },
    { id: 4, name: "小明", age: 20, grades: '98' }
];
const a111 = {
    number: 1,
    age: 2
};
const arr12 = [123];
function getName() {
    let counter = function (start) { };
    counter.interval = 123;
    counter.reset = () => { };
    return counter;
}
