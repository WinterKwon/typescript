import { type } from "os";

const printMessage = (message : string | number) => {
    console.log(message)  
}

printMessage(1234);
printMessage("hello");

//constraints1 - constraining generic types 
const printMessage2 = <T extends string | number> (message: T) : T => {
    return message;
}
console.log(printMessage2<string>("1"));
console.log(printMessage2<number>(2));


//constraints2 - keyof
const getProperty = <T extends object, U extends keyof T>(obj:T, key:U)=>{
    return obj[key]
}

console.log(getProperty({a:1, b:20, c: 300}, "c"));
console.log(getProperty({a:1, b:20, c: 300}, "d"));