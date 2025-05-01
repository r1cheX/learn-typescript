// * DECORADORES

// ^ El decorador de clase se aplica al constructor de la clase y se puede
// ^ usar para observar, modificar, o reemplazar la definición de clase.

// ^ La expresión para el decorador de clase se llamará como una función
// ^ en "tiempo de ejecución", el argumento es el constructor de la clase.

const logClassDecorator = (constructor: Function) => console.log(`Class ${constructor} is created`)


@logClassDecorator
class MyClass {

    // ^ Por defecto si no declaras un constructor, el motor de javascript
    // ^ creará uno por defecto sin parámetros.

}


const myClassInstance = new MyClass();
