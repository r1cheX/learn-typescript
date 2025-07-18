function twoSum2(nums: number[], target: number): number[] {

    let left = 0;
    let right = nums.length - 1;

    while(left <= right){
        const sum = nums[left] + nums[right];
        if(sum === target) return [left + 1, right + 1];
        else if(sum < target) left++;
        else right--;
    }

    return [];
};


const listOrdered = [2,7,11,15]
const targetNumber = 9; 
console.log('lista indices-->', twoSum2(listOrdered, targetNumber)); // [1, 2]