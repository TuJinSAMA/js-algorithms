/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  let hash = {}
  for (let i = 0; i < magazine.length; i++) {
    let char = magazine[i]
    hash[char] = hash[char] ? hash[char] + 1 : 1
  }
  for (let i = 0; i < ransomNote.length; i++) {
    let char = ransomNote[i]
    hash[char] = hash[char] ? hash[char] - 1 : -1
    if (hash[char] < 0) {
      return false
    }
  }
  return true
};


console.log(canConstruct("a", "b"));
console.log(canConstruct("aa", "ab"));
console.log(canConstruct("aa", "aab"));