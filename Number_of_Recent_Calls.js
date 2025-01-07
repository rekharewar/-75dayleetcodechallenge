var RecentCounter = function() {
    this.queue = []; 
};


RecentCounter.prototype.ping = function(t) {
    this.queue.push(t); 
    while (this.queue.length > 0 && this.queue[0] < t - 3000) {
        this.queue.shift();
    }

    return this.queue.length; 
};


var obj = new RecentCounter();
console.log(obj.ping(1));    
console.log(obj.ping(100)); 
