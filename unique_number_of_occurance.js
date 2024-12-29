var uniqueOccurrences = function(arr) {
    let countMap = new Map(); 
    for (let num of arr) {
        countMap.set(num, (countMap.get(num) || 0) + 1);
    }

    let occurrences = Array.from(countMap.values());
    let uniqueOccurrences = new Set(occurrences); 
    
    return occurrences.length === uniqueOccurrences.size;
};


console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3])); 
console.log(uniqueOccurrences([1, 2])); 