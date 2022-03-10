export {}

type Product={
    id: number;
    name: string
}


const a : number = 20;
const b : number = 30;
const name: string = "Nguyen Quy Giang";
const age: number = 19;
const status : boolean = true;
const infor : Product = {id:age,name:name};
const stringArr: string[]= ["a","b","c"];
const numberArr: number[]= [1,2,3];
const objectArr: {}[]= [{id:1},{id:2}]
 
function sum(numA: number, numB: number): number{
    return numA + numB;
}

console.log(sum(a,b))
console.log(name) 