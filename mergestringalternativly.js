var mergeAlternately = function(word1, word2) {
    let mergedString = "";
    let i = 0, j = 0;
    while (i < word1.length || j < word2.length) {
        
        if (i < word1.length) {
            mergedString += word1[i];
            i++;
        }
        if (j < word2.length) {
            mergedString += word2[j];
            j++;
        }
    }
    
    return mergedString;
};
console.log(mergeAlternately("rek","ha"))