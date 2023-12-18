"use strict";
// 函数注解
function tset(x, y) {
    return x + y;
}
let test11 = function (x, y) {
    let a = 1;
    return x + y + a;
};
let test111 = (x, y) => {
    return (x, y) => x + y;
};
let test12 = (x, y) => x + y;
let test13 = (x, y) => x + y;
const funcA = (data) => {
    return Object.prototype.toString.call(data) == '[object Array]' ? true : false;
};
const funcB = (data) => {
    return Object.prototype.toString.call(data) == '[object Array]' ? true : false;
};
// 可选参数
function select(name, age) {
    return name;
}
// 默认参数
function select1(name, age) {
    return name + name;
}
// 可选参数
function select2(name, ...args) {
    return name + name;
}
// this 指向
let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        return function () {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);
            return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();
alert("card: " + pickedCard.card + " of " + pickedCard.suit);
