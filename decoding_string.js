function decodeString(s) {
    const stack = [];

    for (const char of s) {
        if (char !== ']') {
            stack.push(char); 
        } else {
            let encodedString = '';
            while (stack.length > 0 && stack[stack.length - 1] !== '[') {
                encodedString = stack.pop() + encodedString;
            }
            stack.pop(); 
            let k = '';
            while (stack.length > 0 && !isNaN(stack[stack.length - 1])) {
                k = stack.pop() + k;
            }
            stack.push(encodedString.repeat(Number(k)));
        }
    }
    return stack.join('');
}


console.log(decodeString("3[a]2[bc]")); 
console.log(decodeString("3[a2[c]]")); 