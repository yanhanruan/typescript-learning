let stringArr = ['one', 'two', 'three'];

let touhou = ["fom", "aos", 5];

let mixedData = ["ELF", 514, true];


stringArr[0] = "rin"
stringArr.push('hi')

touhou[0] = 1984
touhou.unshift('eos')

// single type array can't convert to an union array
// stringArr = touhou 
touhou = stringArr

let test = []
let bands: string[] = []

// Tuple
let myTuple: [string, number, boolean] = ['Remilia', 500, true]

let mixed = ['Flandre', 495, true]

// the posibility that "mixed" may have fewer elements
// myTuple = mixed  x

myTuple[1] = 42

// Object
let myObject: object
myObject = []
console.log(typeof myObject);
myObject = bands
myObject = {}

const exampleObj = {
    prop1: "yoho",
    prop2: true
}

exampleObj.prop1 = "yOHO"

// type Guitarist = {
//     name: string,
//     active?: boolean,
//     albums: (string | number)[]
// }

// check readme.md to figure out the differences between type and interface
interface Guitarist {
    name?: string,
    active?: boolean,
    albums: (string | number)[]
}

let evh: Guitarist = {
    name: "Eddie",
    active: false,
    albums: [1984, 5150, 'OU812']
}

let jp: Guitarist = {
    name: "Jimmy",
    albums: ['Ⅰ', 'Ⅱ', 'Ⅲ']
}

// evh = jp
// evh.years = 40  // can't add a property that doesn't exist

const greetGuitarist = (guitarist: Guitarist) => {
    return `hi, ${guitarist.name?.toUpperCase()}!`
}

console.log(greetGuitarist(jp));

// Enums

enum Grade {
    U = 1,
    D,
    C,
    B,
    A,
}

console.log(Grade.B);
