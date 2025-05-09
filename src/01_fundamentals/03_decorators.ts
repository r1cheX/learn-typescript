// * -----------------------------------------------------------------
// * DECORATORS

// ? Definition

// ^ A Decorator is a special "KIND OF DECLARATION" that can be attached
// ^ To a class declaration, method, accessor, property and parameter.

// ^ Decorators are special functions that can be attached to classes, methods,
// ^ properties or parameters to MODIFY or ENHANCE their behaviour.

// ? Syntax

// ^ Decorators use the form @expression, where expression must evaluate 
// ^ To a function that will be called at runtime with information about
// ^ the decorated declaration

// ^ They are prefixed with the "@" symbol and are a form of metaprogramming,
// ^ allowing you to add annotations and a layer of abstraction to your code

// ? Analogy with mathematics

// ^ Applying decorators is a lot like composing a chain of functions

// ? Example Simple of the syntax

// function simpleDecorator() {
//     console.log("Hello world Decorators 😁");
// }

// @simpleDecorator
// class Example {}

// * -----------------------------------------------------------------
// * TYPES OF DECORATORS

// ? Class Decorator

// ^ Class Decorator is a function that takes the constructor of the class as its argument.

// ^ It can be used to observe, modify or replace a class definition.

// ^ This is useful to add common functionalities across multiple classes, such as logging, validation
// ^ or data serialization in a consistent and declarative manner.

function ClassDecorator(constructor: Function) {
    console.log("Hello world Class Decorator");
}

@ClassDecorator
class MyClass {
}


// ? Real world example

function AddMetadata(constructor:Function) {

    // ^ Every object in Javascript has a built-in property, which is called its "prototype"
    // ^ The prototype is itself an object --> So, the prototype will have its own prototype

    // ^ Making what's called a "prototype chain", and that chain ends when we reach a prototype
    // ^ that has "null" for its own prottype

    constructor.prototype.createdAt = new Date();
    constructor.prototype.id = Math.floor(Math.random() * 10000);
    constructor.prototype.krak = () => "He creado un decorator :D";
}


@AddMetadata
class User {
    name: string;

    constructor(name: string){
        this.name = name;
    }

}


const userPerson = new User("Richard");

console.log(userPerson.name);
console.log(Object.getPrototypeOf(userPerson))
console.log((userPerson as any).createdAt);
console.log((userPerson as any).krak());

// ^ So this approach, using decorators allows you to add common properties 
// ^ or methods to multiple classes without repeating code, promoting reusability 
// ^ and cleaner codebases.














