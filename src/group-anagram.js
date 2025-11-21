/* 
    Given an array of strings strs, group the anagrams together. You can return the answer in any order.
    Example 1:
    Input: strs = ["eat","tea","tan","ate","nat","bat"]
    Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

    Explanation:
    - There is no string in strs that can be rearranged to form "bat".
    - The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
    - The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.

    Example 2:
    Input: strs = [""]
    Output: [[""]]

    Example 3:
    Input: strs = ["a"]
    Output: [["a"]]

    Constraints:
    - 1 <= strs.length <= 104
    - 0 <= strs[i].length <= 100
    - strs[i] consists of lowercase English letters.
*/

// Time complexity O(n * k log k)
var v1_groupAnagrams = function(strs) {
    const map = new Map();

    for (let s of strs) {
        let key = s.split('').sort().join(''); // sort huruf
        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key).push(s);
    }

    return Array.from(map.values());
};


// Time complexity O(N * K)

function v2_groupAnagrams(strs){
 const map = new Map();
 for(let i=0; i<strs.length; i++){
  const count = Array(26).fill(0);

  for(let j=0; j<strs[i].length; j++){
    count[strs[i][j].charCodeAt() - 'a'.charCodeAt()]++;
  }

    const key = count.join("#")

    if(!map.has(key)){
       map.set(key,[])
    }

    map.get(key).push(strs[i])
 }

 return Array.from(map.values())
}