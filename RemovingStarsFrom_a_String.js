function removeStars(s) {
    const stack = [];

    for (const char of s) {
        if (char === '*') {
            stack.pop(); 
        } else {
            stack.push(char); 
        }
    }

    return stack.join('');
}


console.log(removeStars("leet**cod*e")); 

console.log(removeStars("erase*****")); 
