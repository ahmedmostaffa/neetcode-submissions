class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findPeakElement(nums: number[]): number {
    let left=0;
    let right=nums.length-1;
    while(left<right){
        let mid=Math.floor((right+left)/2)
        if(nums[mid]<nums[mid+1]){
            left=mid+1;
        }else{
            right=mid;
        }
    }
    return left;
    
        
    }
}
