// 函数注解
function tset(x: number, y: number): number {
  return x + y
}


let test11 = function (x: number, y: number): number {
  let a: number = 1
  return x + y + a
}


let test111 = (x: number, y: number): Function => {
  return (x: number, y: number) =>  x + y
}


let test12: (x: number, y: number) => number = (x, y) => x + y



interface ITest {
  (x: number, y: number): number
}

let test13: ITest = (x, y) => x + y
const funcA = (data: any): boolean => {
  return Object.prototype.toString.call(data) == '[object Array]' ? true : false
}
const funcB = <T>(data: T): boolean => {
  return Object.prototype.toString.call(data) == '[object Array]' ? true : false
}

// 可选参数
function select (name: string, age?: string):string {
  return name
}
// 默认参数
function select1 (name: string, age: '231'):string {
  return name + name
}

// 可选参数
function select2 (name: string, ...args: string[]):string {
  return name + name
}



interface Card {
    suit: string;
    card: number;
}
interface Deck {
    suits: string[];
    cards: number[];
    createCardPicker(this: Deck): () => Card;
}
// this 指向
let deck: Deck = {
  suits: ["hearts", "spades", "clubs", "diamonds"],
  cards: Array(52),
  createCardPicker: function(this: Deck) {

      return function (this: Deck) {
          let pickedCard = Math.floor(Math.random() * 52);
          let pickedSuit = Math.floor(pickedCard / 13);

          return {suit: this.suits[pickedSuit], card: pickedCard % 13};
      }
  }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

alert("card: " + pickedCard.card + " of " + pickedCard.suit);