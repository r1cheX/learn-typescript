// * Typescript vs Javascript

// ? Definición Typescript

// ^ Typescript is a superset of Javascript built by Microsoft that adds 
// ^ static typing and other features to enhance Javascript deveploment.


// * Key Differences

// ? -----------------------------------------------------------------------------
// ? 1. Static Typing

// ^ Javascript is dynamically typed.
// ^ Typescript is statically typed with type inference.

// ! Example

// // JavaScript
// let age = 25;
// age = "twenty five"; // No error in JS

// TypeScript
let age: number = 25;
// age = "twenty five"; // Error: Type 'string' is not assignable to type 'number'


// ? -----------------------------------------------------------------------------
// ? 2. Interfaces and Types

// ^ JavaScript does not have interfaces or type aliases.
// ^ TypeScript allows defining custom types and interfaces for better structure.

// JavaScript
// No native support for interfaces

// TypeScript
interface Person {
    name: string;
    age: number;
    city: string;
}

let user: Person = { name: "Alice", age: 30, city: "Trujillo" };

// ? -----------------------------------------------------------------------------
// ? 3. Compile-Time Error Checking

// ^ JavaScript errors are found at "RUNTIME".
// ^ TypeScript catches many errors during "COMPILATION".

// // JavaScript
// let x = 10;
// console.log(x.toUpperCase()); // Runtime error

// TypeScript
let x: number = 10;
// console.log(x.toUpperCase()); // Compile-time error

// ? -----------------------------------------------------------------------------
// ? 4. Modern Features and ESNext Support

// ^ TypeScript supports modern JavaScript features and transpiles them for older environments.

// // JavaScript
// class Animal {WHAT A
//   constructor(name) {
//     this.name = name;
//   }
// }

// TypeScript
class Animal {
    constructor(public name: string) {}
}

// ? -----------------------------------------------------------------------------
// ? 5. Tooling and IDE Support

// ^ TypeScript offers better autocompletion, refactoring, and navigation in editors due to type information.


// ? -----------------------------------------------------------------------------
// ? 6. Type Inference

// ^ TypeScript can automatically infer types based on assigned values, reducing the need for explicit annotations.

// Example
let inferredString = "Hello, TypeScript!"; // inferred as string
// inferredString = 42; // Error: Type 'number' is not assignable to type 'string'

// ? -----------------------------------------------------------------------------
// ? 7. Generics

// ^ TypeScript supports generics, allowing you to write reusable and type-safe code components.

// Example
function identity<T>(value: T): T {
    return value;
}

let num = identity<number>(123); // num: number
let str = identity<string>("abc"); // str: string

