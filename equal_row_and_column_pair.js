function equalPairs(grid) {
    const n = grid.length;
    let count = 0;

    const rowStrings = grid.map(row => row.join(','));
  
    for (let col = 0; col < n; col++) {
        const columnArray = [];
        for (let row = 0; row < n; row++) {
            columnArray.push(grid[row][col]);
        }
        const columnString = columnArray.join(',');

        count += rowStrings.filter(rowStr => rowStr === columnString).length;
    }

    return count;
}

console.log(equalPairs([[3, 2, 1], [1, 7, 6], [2, 7, 7]])); 
console.log(equalPairs([[3, 1, 2, 2], [1, 4, 4, 5], [2, 4, 2, 2], [2, 4, 2, 2]]));