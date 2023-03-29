"use strict";

//var a = 1;
//let b = 2;
//const c = 50;

//a = "oi";
//let d = 10;

//console.log(a,b,c,d);

var globalGreeting = "Good ";

function testFunc() {
  var localGreeting = "Morning ";
  console.log("function: ");
  console.log(globalGreeting);
  console.log(localGreeting);
}

testFunc();

console.log("Main Program: ");
console.log(globalGreeting);
//console.log(localGreeting);

let isDataValid = true;
let isStringTooLong = false;
let isGameOver = false;
let continueLoop = true;

console.log(false);
console.log(typeof false);
console.log(isDataValid);
console.log(typeof isDataValid);

const year = 1991;
let delayInSeconds = 0.00016;
let area = (16 * 3,14);
let halfArea = area / 2;

console.log("Ano = " + year);
console.log(typeof year);

let a = 10;
let b = 0x10;
let c = 0o10;
let d = 0b10;

console.log("a = " + a);
console.log("b = " + b);
console.log("c = " + c);
console.log("d = " + d);

let x = 9e3;
let y = 123e-5;
console.log("x = " + x);
console.log("y = " + y);

let z = 0x21;
console.log("z = " + z);

let country = "Malawi";
let continent = "Africa";

console.log(country);
console.log(typeof country);
console.log(continent);
console.log(typeof continent);

let msg1 = "Chamando o doutor Hans Chucrute.";
let msg2 = "Em todos esses anos na indústria vital, essa é a primeira vez que isso me acontece.";

console.log(msg1);
console.log(msg2);

let testObj = {};
console.log(typeof testObj);

let testObj1 = {
  nr: 600,
  str: "text"
};

console.log(testObj1.nr);
console.log(testObj1.str);

let user1 = {
  nome: "Rafael",
  snome: "Goulart",
  idade: 20,
  email: "RafaelGoulart@hotmail.com"
};

let user2 = {
  nome: "leafaR",
  snome: "tralouG",
  idade: 20,
  email: "leafaRtralouG@hotmail.com"
};

console.log(user1.nome + " " + user1.snome);
console.log("  " + user1.idade);
console.log("  " + user1.email);

console.log(user2.nome + " " + user2.snome);
console.log("  " + user2.idade);
console.log("  " + user2.email);

console.log("Feliz aniversário " + user1.nome + " ! ! !")
user1.idade = 21;

console.log(user1.nome + " " + user1.snome);
console.log("  " + user1.idade);
console.log("  " + user1.email);

user2.phone = "+55 (11) 97070-7070"

console.log(user2.nome + " " + user2.snome);
console.log("  " + user2.idade);
console.log("  " + user2.email);
console.log(user2.phone);

delete user2.phone;

console.log(user2.nome + " " + user2.snome);
console.log("  " + user2.idade);
console.log("  " + user2.email);

let test = {
  nr: 10,
  b: false,
  str: "uno dos tres",
  arr: [10, 20, 30],
  obj: {
    x: 10,
    y: 20
  },
  fn: function(arg) {
    console.log(arg)
  }
};

test.fn(123);
console.log(test.obj.x);
test.obj.y = 40;

let point = {
  x: 0,
  t: 0,
  moveHorizontally: function(distance) {
    this.x = this.x + distance;
  },
  moveVertically: function(distance) {
    this.y = this.y + distance;
  }
}

console.log(point.x);
point.moveHorizontally(30);
console.log(point.x);
point.moveVertically(40);
console.log(point.y);