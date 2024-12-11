
var productExceptSelf = function(nums) {
    let n = nums.length; 
 let result = new Array(n).fill(1); 

 let prefix = 1;
 for (let i = 0; i < n; i++) {
     result[i] = prefix;
     prefix *= nums[i];
 }
 let suffix = 1;
 for (let i = n - 1; i >= 0; i--) {
     result[i] *= suffix;
     suffix *= nums[i];
 }
 
 return result;
};


let res=productExceptSelf([1,2,3,4,5])
console.log(res)