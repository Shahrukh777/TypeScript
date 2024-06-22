"use strict";
//ARRAY
Object.defineProperty(exports, "__esModule", { value: true });
var heros = []; // ARRAY OF TYPE STRING
heros.push("Spiderman");
var numbers = []; // ARRAY OF TYPE NUMBER
numbers.push(12);
console.log(heros);
console.log(numbers);
var allUsers = []; // ARRAY USING OBJECT
allUsers.push({
    name: "Shah",
    age: 21
});
console.log(allUsers);
var model = [
    [255, 255, 255],
    [123, 456, 789]
];
console.log(model);
// UNION TYPE (MULTIPLE DATA TYPES90)
var score = 33;
score = "45";
var shahrukh = { name: "Shahrukh", id: 40 };
shahrukh = { username: "AdminShahrukh", id: 1 };
function getDBID(id) {
    console.log("DBID is" + ' ' + id);
}
getDBID(3);
