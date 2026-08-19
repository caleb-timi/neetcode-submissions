class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // Long Method
        // for (let i = 0; i < nums.length; i++){
        //     for(let j = 1; j < nums.length; j++){
        //         if ((nums[i] + nums[j] == target) && (i!==j)){
        //             return [i,j];
        //         }
        //     }  
        // }

        const seen = {};

        for (let i=0; i < nums.length; i++){
            const complement = target - nums[i];
        

            if(seen[complement] !== undefined){
                return [seen[complement], i];
            }

            seen[nums[i]] = i;
        }
        
    }
}
