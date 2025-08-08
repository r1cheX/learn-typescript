// * Koko can decide her bananas-per-hour eating speed k

// * k --> velocity (number of bananas/hour)
// * velocity = 1 / t * number of bananas.

// ^ if Pile has less than k bananas, she is going to eat 
// ^ all the bananas in that hour.

// ! Return the minimum integer velocity k --> eat all the bananas
// ! withing hours

// ? Examples

// Input: piles = [3,6,7,11], h = 8
// Output: 4

// Input: piles = [30,11,23,4,20], h = 5
// Output: 30

function minEatingSpeed(listPiles: number[], totalHours: number): number {
    // * How we can find the total hours by a specific velocity

    // ^ if each pile (p) has "n" number of bananas and we have the total hours 
    // ^ which is "h", the refore we should find the total hours by a specific velocity k
    
    // ^ we must iterate  thourh the piles --> by each pile we are going to sum
    // ^ since that velocity (k) = number of bananas / time
    // ^ so, the time in that specific pile = number of bananass / k --> it dosnt exist decimals (ceil)

    const calculateTotalHours = (velocity: number) => {
        let hours = 0;
        for (const bananas of listPiles) {
            hours += Math.ceil(bananas / velocity);
        }

        return hours;
    }

    // ^ We are going apply binary search - why ?
    // ^ We have to find a specific velocity which has a range (1, max(piles))

    let left = 1; // 1 bananas per hour
    let right = Math.max(...listPiles);
    let result = right; // worst scenario --> find the minimum

    while ( left <= right ){
        const middleVelocity = Math.floor((left + right) / 2);

        if(calculateTotalHours(middleVelocity) <= totalHours){
            result = middleVelocity;
            right = middleVelocity - 1;
        } else {
            left = middleVelocity + 1;
        }
    }


    return result;
};


const listPiles = [30,11,23,4,20]
console.log(minEatingSpeed(listPiles, 5)) // v = 30

