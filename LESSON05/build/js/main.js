"use strict";
//  convert to more or less specific
let a = 'hello123';
let b = a; // less specific
let c = a; // more specific
let d = 'world';
let e = 'world'; // the angle brackets can't be used in react
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
// be careful! ts sees no problem - but a string is returned
let nextVal = addOrConcat(2, 2, 'concat');
// 10 as string
10; // avoid force casting whenever possible
// the DOM
const img = document.querySelector('img');
const myImg = document.getElementById('#img');
const nextImg = document.getElementById('#img');
// img.src
// myImg.src
// nextImg.src
