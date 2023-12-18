"use strict";
let ar = [1, 2, 3];
const fb = (arr) => {
    let newA = [];
    for (let i = 0; i < arr.length; i++) {
        newA.push(i);
    }
    return newA;
};
fb(ar);
let users = [
    { id: 1, parentId: 0, name: "菜单1" },
    { id: 2, parentId: 0, name: "菜单2" },
    { id: 3, parentId: 0, name: "菜单3" },
    { id: 4, parentId: 1, name: "菜单4" },
    { id: 5, parentId: 1, name: "菜单5" },
    { id: 6, parentId: 2, name: "菜单6" },
    { id: 7, parentId: 4, name: "菜单7" },
    { id: 8, parentId: 7, name: "菜单8" },
    { id: 9, parentId: 8, name: "菜单9" },
    { id: 10, parentId: 9, name: "菜单10" },
    { id: 11, parentId: 10, name: "菜单11" },
    { id: 12, parentId: 11, name: "菜单12" },
    { id: 13, parentId: 12, name: "菜单13" },
    { id: 14, parentId: 13, name: "菜单14" },
];
let obj111 = {
    name: 'li',
    msg: {
        height: 1.8,
        bobby: [1, 2, 3]
    },
    eat: [4, 5, 6],
};
const funccc = (obj, target) => {
    for (let k in obj) {
        if (typeof obj[k] !== 'object' && typeof obj[k] !== null) {
            target[k] = obj[k];
        }
        else {
            if (Object.prototype.toString.call(obj[k]) === '[object Object]') {
                target[k] = {};
                funccc(obj[k], target[k]);
            }
            else {
                target[k] = [];
                funccc(obj[k], target[k]);
            }
        }
    }
    return target;
};
funccc(obj111, {});
