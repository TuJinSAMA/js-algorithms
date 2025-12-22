/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    let isStrictlyIncreasing = function(s) {
      return [...s].every((char, i, arr) => i === 0 || arr[i - 1] <= char)
    }

    const cols = strs[0].split("").map((_, colIndex) => 
      strs.map(row => row[colIndex]).join("")
    )
    console.log(cols)
    return cols.filter(col => !isStrictlyIncreasing(col)).length
};

// console.log(minDeletionSize(["cba","daf","ghi"]))
// console.log(minDeletionSize(["a","b"]))
// console.log(minDeletionSize(["zyx","wvu","tsr"]))
console.log(minDeletionSize(["rrjk","furt","guzm"]))