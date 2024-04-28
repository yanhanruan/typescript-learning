type One = string
type Two = string | number
type Three = 'hello'


//  convert to more or less specific
let a: One = 'hello123'
let b = a as Two // less specific
let c = a as Three // more specific

let d = <One>'world'
let e = <string | number>'world' // the angle brackets can't be used in react


const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
    if (c === 'add') return a + b
    return '' + a + b
}

let myVal: string = addOrConcat(2, 2, 'concat') as string

// be careful! ts sees no problem - but a string is returned
let nextVal: number = addOrConcat(2, 2, 'concat') as number

// 10 as string
(10 as unknown) as string // avoid force casting whenever possible


// the DOM
const img = document.querySelector('img')!
const myImg = document.getElementById('#img') as HTMLImageElement
const nextImg = <HTMLImageElement>document.getElementById('#img')


// img.src
// myImg.src
// nextImg.src