function groupAnagrams(listWords: string[]): string[][] {

    const listWordsByUniqueAnagram = new Map<string, string[]>();

    for (const word of listWords) {
        const orderedWord = word.split("").sort((a,b) => a.localeCompare(b)).join("");
        if(listWordsByUniqueAnagram.has(orderedWord)){
            listWordsByUniqueAnagram.get(orderedWord)!.push(word)
        } else {
            listWordsByUniqueAnagram.set(orderedWord, [word]);
        }
    }


    const values = listWordsByUniqueAnagram.values();
    return Array.from(values);
};

console.log('groupAnagram-->', groupAnagrams(["eat","tea","tan","ate","nat","bat"])); 
console.log('groupAnagram2-->', groupAnagrams([""])); 
console.log('groupAnagram3-->', groupAnagrams(["a"]));
