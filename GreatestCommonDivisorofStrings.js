/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    
    function divides(s, t) {
        return s === t.repeat(s.length / t.length);
    }

    const gcdLength = (a, b) => b === 0 ? a : gcdLength(b, a % b);
    const lenGCD = gcdLength(str1.length, str2.length);
    const candidate = str1.substring(0, lenGCD);
    if (divides(str1, candidate) && divides(str2, candidate)) {
        return candidate;
    }
    return "";
};

console.log(gcdOfStrings("ABCABC", "ABC")); 