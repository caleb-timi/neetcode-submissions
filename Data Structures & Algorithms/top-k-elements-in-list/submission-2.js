class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = {};

        for (const i of nums){
            count[i] = (count[i] || 0) + 1;
        }

        const keys = Object.keys(count).sort((a,b) => count[b] - count[a]);
        return keys.slice(0,k).map(Number);

    }
}
