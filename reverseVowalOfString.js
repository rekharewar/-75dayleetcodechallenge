function isVowel(char) {
    const vowels = "aeiouAEIOU"; 
    return vowels.includes(char);
}

function reverseVowels(s) {
    let arr = s.split(''); 
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        while (left < right && !isVowel(arr[left])) {
            left++;
        }
        while (left < right && !isVowel(arr[right])) {
            right--;
        }
        if (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }

    return arr.join('')
}


let s = "IceCreAm";
console.log(reverseVowels(s));  
