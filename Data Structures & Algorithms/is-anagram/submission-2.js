class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const firstWord = [...s].sort();
        const secondWord = [...t].sort();
        if (firstWord.join("") === secondWord.join("")){
            return true;
        }
        else{
            return false;
        }
    }
}
