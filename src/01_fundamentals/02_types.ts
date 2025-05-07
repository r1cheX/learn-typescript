// * Types

// ? ---------------------------------------------------------------
// ? Primitive types


const stringVariable: string = "xd";
const numberVariable: number = 200;
const booleanVariable: boolean = false;

// These variables are the same
const arrayVariable: Array<number> = [1,2,3,4];
const array2Variable: number[] = [1,2,3,4];

// ^ Importante los tipos String, Number and Boolean 
// ^ are legal, but refer to some special build-in types
// ^ It's like a wrapper.

// ? ---------------------------------------------------------------
// ? Wrapper types - Buld-in types  (Tipos incorporados)

const strObj: String = new String("Hi!");


// ? ---------------------------------------------------------------
// ? Other types

// * -----------------------------------------------------------------
// * ANY

// ^ Disables all further type-checking

// ^ Use it when you don't want a particualr value to 
// ^ cause typechecking ( verificación tipos) errors

// ^ it is assumed you know the environment better than ts.

let obj: any = { x: 2 };

// obj.foo(); throw compilation error
// obj(); throw compilation error
obj = "hello"


// * -----------------------------------------------------------------
// * UNKNOWN

// ^ Represents any value, but is safer because you are not allowed 
// ^ to do anything with an unknown value.

let obj2: unknown = { x: 2 };

// ! obj2.foo(); throws a compilation error


// * -----------------------------------------------------------------
// * VOID

// ^ Represents the return value of functions which don't return a value
// ^ Its the inferred type of:

// ^ - Function dosen't have any return statement.
// ^ - Function doesn't return any explicit number

function voidFunction(){
    return;
}

function void2Function(){
}

// ^ If we don't return any value --> we return undefined
console.log('debugging voidFUncton-->', void2Function());

// * -----------------------------------------------------------------
// * NEVER

// ^ Represents values that never occur, it's used when:

// ^ - A function never returns (throws a error or hasn an infinitie loop)
// ^ - A funciton always throws an exception
// ^ - When ts determines there's nothing left in a union


function throwErrror(message: string): never {
    throw new Error(message);
}

function inferedNever(){
    return throwErrror("aea")
}

function infiniteLoop(): never {
    while(true){

    }
}

function failureCheck(value: string | number): string {
    if (typeof value === "string") {
        return "It's a string";
    } else if (typeof value === "number") {
        return "It's a number";
    } else {
        // This else block has type 'never' because all possible cases are handled above
        const neverValue = value; // TypeScript knows this is impossible
        return neverValue;
    }
}

throwErrror("xd")





