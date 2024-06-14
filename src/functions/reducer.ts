const array: Array<number> = [5, 1, 0, 12];

const initialValue: number = 2;

const sumWithInitial = array.reduce<number>((accumulator, currentValue, currenIndex) => {
    console.log(`indice ${currenIndex}, acumulador: `, accumulator);
    console.log(`indice ${currenIndex}, valor actual: `, currentValue);
    return accumulator / currentValue;
}, initialValue)

console.log('debugging sum inicial-->', sumWithInitial);