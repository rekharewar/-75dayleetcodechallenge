var largestAltitude = function(gain) {
    let currentAltitude = 0; 
    let highestAltitude = 0; 
    
    for (let change of gain) {
        currentAltitude += change;
        highestAltitude = Math.max(highestAltitude, currentAltitude); 
        }
    
    return highestAltitude;
};


console.log(largestAltitude([-5, 1, 5, 0, -7]));

