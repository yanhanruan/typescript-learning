"use strict";
let stringArr = ['one', 'two', 'three'];
let touhou = ["fom", "aos", 5];
let mixedData = ["ELF", 514, true];
stringArr[0] = "rin";
stringArr.push('hi');
touhou[0] = 1984;
touhou.unshift('eos');
// single type array can't convert to an union array
// stringArr = touhou 
touhou = stringArr;
let test = [];
let bands = [];
// Tuple
let myTuple = ['Remilia', 500, true];
let mixed = ['Flandre', 495, true];
// the posibility that "mixed" may have fewer elements
// myTuple = mixed  x
myTuple[1] = 42;
// Object
let myObject;
myObject = [];
console.log(typeof myObject);
myObject = bands;
myObject = {};
const exampleObj = {
    prop1: "yoho",
    prop2: true
};
exampleObj.prop1 = "yOHO";
let evh = {
    name: "Eddie",
    active: false,
    albums: [1984, 5150, 'OU812']
};
let jp = {
    name: "Jimmy",
    albums: ['Ⅰ', 'Ⅱ', 'Ⅲ']
};
// evh = jp
// evh.years = 40  // can't add a property that doesn't exist
const greetGuitarist = (guitarist) => {
    var _a;
    return `hi, ${(_a = guitarist.name) === null || _a === void 0 ? void 0 : _a.toUpperCase()}!`;
};
console.log(greetGuitarist(jp));
// Enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.B);
