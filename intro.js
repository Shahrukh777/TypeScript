"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greetings = "Hello, Shahrukh.";
console.log(greetings);
greetings.toUpperCase();
var a = 2;
// a.toUppercase()
//number
var id = 1234.21;
//boolean
var isLoggedIn = true;
//FUNCTIONS + default values
function addTwo(num) {
    return num + 2;
}
addTwo(10);
function getUpper(str) {
    console.log(str.toUpperCase());
}
getUpper("shahrukh");
var login = function (name, age, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    var user = {
        name: name,
        age: age,
        paid: isPaid
    };
    console.log(user.name + " " + user.age + " " + user.paid);
};
login("Shahrukh", 21, true);
// FUNCTION OUTPUT CASE
function add(n) {
    return n + 5;
    // return "Shah"     ***** WILL BE ERROR
}
var getHello = function () {
    return "";
};
var heros = ["Ironman", "Thor", "Hulk"];
// const heros = [1, 2, 3]    **********WILL CHANGE TYPE IN NUMBER if not strict
heros.map(function (hero) {
    // console.log(`Hero is ${hero}`)
    return "Hero is ".concat(hero);
});
//  VOID
function log(mas) {
    console.log(mas);
}
// NEVER *** ERROR HANDLING  *** represents values that are never observed *** ternimates execution of program
function never(mmm) {
    throw new Error(mmm);
}
// FUNCTIONS RETURNING OBJECTS
function createCourse() {
    return { name: "React", price: 499 };
}
function userCreate(user) {
    console.log(user.name + " " + user.age + " " + user.isActive);
}
userCreate({ name: "Shah", age: 21, isActive: true });
function coordinates(pt) {
    console.log(pt.x);
    console.log(pt.y);
}
coordinates({ x: 100, y: 100 });
