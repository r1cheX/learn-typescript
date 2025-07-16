// Performance O(n)

export function isAnagram(firstString: string, secondString: string): boolean {
    if(firstString.length !== secondString.length) return false;

    const numTimesByLetter = new Map<string, number>()

    for (const letter of firstString) {
        if(numTimesByLetter.has(letter)){
            const numTimes = numTimesByLetter.get(letter);
            const valueToSet = numTimes! + 1;
            numTimesByLetter.set(letter, valueToSet);
        } else {
            numTimesByLetter.set(letter, 1);
        }
    }

    for(const letter of secondString){
        if(!numTimesByLetter.has(letter)) return false;
        if(numTimesByLetter.get(letter)! - 1 < 0) return false;
        numTimesByLetter.set(letter, numTimesByLetter.get(letter)! - 1)
    }

    return true;
};


console.log('is Anagram-->', isAnagram('anagram', 'nagaram')); 
