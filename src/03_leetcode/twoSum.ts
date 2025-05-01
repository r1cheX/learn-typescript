function twoSum(nums: number[], target: number): number[] {

    let indexFirst = null;
    let indexSecond = null

    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        const elementToSearch = target - element;

        const foundIndex = nums.findIndex((num) => num === elementToSearch);

        console.log('debugging foundidnex-->', foundIndex);

        if (foundIndex !== -1){
            indexSecond = foundIndex;
            indexFirst = i;
            break;
        }

    }


    return [indexFirst!, indexSecond!].sort();
};


const listNumbers2 = [2,4,11,3]
// const listNumbers2 = [3,2,4,11]
const target = 6; 
console.log('lista indices-->', twoSum(listNumbers2, target)); // Expected [0,1]