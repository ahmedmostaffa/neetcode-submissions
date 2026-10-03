class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums: number[]): number {
        const dp = new Array(nums.length);
        dp[0]=nums[0];
        dp[1]=Math.max(nums[1],nums[0]);
        for(let i =2;i<nums.length;i++){
            dp[i]=Math.max(dp[i-2]+nums[i],dp[i-1]);
        }
        return dp[nums.length-1]
    }
}
