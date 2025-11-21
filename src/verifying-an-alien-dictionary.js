/*
    In an alien language, surprisingly, they also use English lowercase letters, but possibly in a different `order`. The `order` of the alphabet is some permutation of lowercase letters.

    Given a sequence of `words` written in the alien language, and the `order` of the alphabet, return `true` if and only if the given `words` are sorted lexicographically in this alien language.

    **Example 1:**
    Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
    Output: true
    Explanation:As 'h' comes before 'l' in this language, then the sequence is sorted.

    **Example 2:**
    Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
    Output: false
    Explanation:As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.


    **Example 3:**
    Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
    Output: false
    Explanation:The first three characters "app" match, and the second string is shorter (in size.) According to lexicographical rules "apple" > "app", because 'l' > '∅', where '∅' is defined as the blank character which is less than any other character (More info).

    **Constraints:**
    - `1 <= words.length <= 100`
    - `1 <= words[i].length <= 20`
    - `order.length == 26`
    - All characters in `words[i]` and `order` are English lowercase letters.
*/

// Time complexity O(n), space complexity O(n)
function rankOrder(order){
    let rank = {};
    for(let i = 0; i < order.length; i++){
        rank[order[i]] = i;
    }
    return rank;
}

function compare(word1, word2, rank){
    const minLength  = Math.min(word1.length, word2.length);
    for(let i =0; i<minLength; i++){
        if(rank[word1[i]] < rank[word2[i]] && i === 0){
            return true;
        }
        if(word1[i] !== word2[i]){
            return rank[word1[i]] < rank[word2[i]];
        }
    }   
    return word1.length <= word2.length;
}

function isAlienSorted(words, order){
    const rank = rankOrder(order);
    
    for(let i = 0; i<words.length - 1; i++){
        if(!compare(words[i], words[i+1], rank)) return false;
    }
    return true;
}