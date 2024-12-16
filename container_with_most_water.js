
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;

    while (left < right) {
  
        const currentHeight = Math.min(height[left], height[right]);
        const currentWidth = right - left;
        const currentArea = currentHeight * currentWidth;

        maxArea = Math.max(maxArea, currentArea);
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
};


const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log("The maximum area of water the container can hold is: " + maxArea(height));
