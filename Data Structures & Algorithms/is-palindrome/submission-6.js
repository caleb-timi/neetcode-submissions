class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const word = s.toLowerCase().replace(/\p{P}/gu,"").replaceAll(" ","");
        const reversedWord = word.split("").reverse().join("")

        return word === reversedWord
    }
}
