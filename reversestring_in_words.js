
var reverseWords = function(s) {
   
    let words = s.trim().split(/\s+/);
    words.reverse();
    return words.join(' ');
};

let res=reverseWords("rekha is good girl")
console.log(res)