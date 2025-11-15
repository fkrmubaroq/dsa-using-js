/*
    Given two strings s and t, return true if t is an anagram of s, and false otherwise.
    Anagram = dua kata yang hurufnya sama persis, hanya beda urutan. 
    inti dari soalnya Diberikan dua string s dan t, kembalikan true kalau t adalah anagram dari s, jika tidak, kembalikan false.
*/

// version 1, time complexity O(n)
function v1_isValidAnagram(s, t) {
    if (s.length !== t.length) return false;

    const count = {};

    for (let char of s) {
        count[char] = (count[char] || 0) + 1;
    }

    for (let char of t) {
        if (!count[char]) return false;
        count[char]--;
    }

    return true;
}

// version 2, time complexity O(n)
function v2_isAnagaram(s, t) {
    if (s.length !== t.length) return false;
    const arr = Array(26).fill(0)
    for (let i = 0; i < s.length; i++) {
        arr[s[i].charCodeAt() - 'a'.charCodeAt()]++;
        arr[t[i].charCodeAt() - 'a'.charCodeAt()]--;
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) return false;
    }
    return true;
}