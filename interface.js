"use strict";
// INTERFACE (Loose class) 
Object.defineProperty(exports, "__esModule", { value: true });
var shahrukh = {
    name: "Shahrukh",
    id: 123,
    trial: function () {
        return "Start";
    },
    better: function () {
        return 42;
    },
    getCoupon: function (name, num) {
        return 10;
    }
};
function coord(pt) {
    console.log("x: " + pt.x);
    console.log("y: " + pt.y);
}
coord({ x: 100, y: 200 });
