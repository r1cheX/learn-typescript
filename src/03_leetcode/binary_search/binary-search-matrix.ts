function searchMatrix(matrix: number[][], target: number): boolean {
    const rows = matrix.length;

    if(rows === 0) return false;

    const columns = matrix[0].length;

    if(columns === 0) return false;

    let left = 0;
    let right = (rows * columns) - 1;
    
    while(left <= right){
        // * virtual index
        const middle = Math.floor((left + right)/ 2);
        // * How can we get the specific row and column from this iteration
        const row = Math.floor(middle / columns); 
        const column = middle % columns; 

        const middleElement = matrix[row][column];
        if(middleElement === target) return true;
        else if(middleElement < target) left = middle + 1;
        else right = middle - 1;
    }

    return false;
};


const matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]]
console.log(searchMatrix(matrix, 60))

const matrix2 = [[1,3,5,7],[10,11,16,20],[23,30,34,60]];
console.log(searchMatrix(matrix2, 13))