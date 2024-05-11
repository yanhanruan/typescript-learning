"use strict";
// const stringEcho = (arg: string): string => arg
const echo = (arg) => arg;
const isObj = (arg) => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null);
};
console.log(isObj(true));
console.log(isObj('John'));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: 'John' }));
console.log(isObj(null));
const isTrue = (arg) => {
    // check if it's an empty array
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    // check if it's an empty object
    if (isObj(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    // The !! operator is used to convert arg to a boolean.
    return { arg, is: !!arg };
};
