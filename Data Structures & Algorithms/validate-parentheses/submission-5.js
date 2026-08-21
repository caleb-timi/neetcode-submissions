class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];

        for (const symbol of s){

            if (symbol === "(" || symbol === "{" || symbol === "["){
                stack.push(symbol);
            }
            else{
                const top = stack.pop();

                if (
                    symbol === "}" && top !=="{"||
                    symbol === "]" && top !=="["||
                    symbol === ")" && top !=="("
                ){
                    return false;
                }
            }
        }
        return stack.length === 0;
    }
}