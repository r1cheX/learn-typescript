function twoSum(nums: number[], target: number): number[] {

    const indexByNumber = new Map<number, number>();

    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        const elementToFind = target - element;

        if(indexByNumber.has(elementToFind)){
            return [index, indexByNumber.get(elementToFind)!];
        }

        indexByNumber.set(element, index);
    }


    return [];
};


const listNumber = [2,4,11,3]
const target = 6; 
console.log('lista indices-->', twoSum(listNumber, target)); // Expected [0,1]