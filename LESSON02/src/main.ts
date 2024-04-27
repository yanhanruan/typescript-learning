let myName: string = 'satori';
let meaningOfLife: number;
let isLoading: boolean;
let album: any;

myName = 'koishi'
meaningOfLife = 42
isLoading = true
album = 514;

const sum = (a: number, b: string) => {
    return a + b;
}

// union type
let postId: string | number
let isActive: number | boolean

let re: RegExp = /\w+/g