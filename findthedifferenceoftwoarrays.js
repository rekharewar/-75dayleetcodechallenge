var findDifference = function(nums1, nums2) {
   
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);

   
    let uniqueInNums1 = Array.from(set1).filter(num => !set2.has(num));

   
    let uniqueInNums2 = Array.from(set2).filter(num => !set1.has(num));

    return [uniqueInNums1, uniqueInNums2];
};


console.log(findDifference([1, 2, 3], [2, 4, 6])); 