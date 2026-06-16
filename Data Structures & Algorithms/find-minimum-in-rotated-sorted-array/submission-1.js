class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
    const n = nums.length;
    var left = 0;
    var right = n - 1;
    
    while (left < right) {
        let mid = Math.floor(left + (right - left) / 2);
        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }

    }
    return nums[left];

}
    
}
