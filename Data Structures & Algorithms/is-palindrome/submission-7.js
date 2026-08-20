class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const word = s.toLowerCase().replace(/[^a-z0-9]/g,"").replaceAll(" ","");
        const reversedWord = word.split("").reverse().join("")

        return word === reversedWord
    }
}
