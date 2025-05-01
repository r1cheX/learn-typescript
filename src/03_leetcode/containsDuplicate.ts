function containsDuplicate(listNumbers: number[]): boolean {
    const setNumbers = new Set(listNumbers);
    return setNumbers.size != listNumbers.length
};


const listNumbers = [1,2,3,1];
console.log('debugging contains duplicate-->', containsDuplicate(listNumbers)); 