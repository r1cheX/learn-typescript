function isAnagram2(firstString: string, secondString: string): boolean {
    const listFirstString = firstString.trim().split('');
    const listSecondString = secondString.trim().split('');

    const orderListFirstString = listFirstString.sort((a, b) => a.localeCompare(b));
    const orderListSecondString = listSecondString.sort((a, b) => a.localeCompare(b));

    const orderListFirstStringString = orderListFirstString.join('');
    const orderListSecondStringString = orderListSecondString.join('');

    return orderListFirstStringString === orderListSecondStringString;
};



console.log('debugging testiung-->', isAnagram2('aa', 'a')); 
