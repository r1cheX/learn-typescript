export function findTarget(array: number[], target: number): number {

    let left = 0
    let right = array.length - 1;

    while (left <= right) {
        const middle = Math.floor((left + right) / 2);

        if (array[middle] === target) return middle;
        else if (array[middle] < target) left = middle + 1;
        else right = middle - 1;
    }

    return -1;
}


const listOrderedNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 20]
console.log(findTarget(listOrderedNumbers, 20))