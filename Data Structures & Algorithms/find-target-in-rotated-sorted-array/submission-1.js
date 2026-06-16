class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
    const n = nums.length;
    var left = 0;
    var right = n - 1;
    // [4,5,6,7,0,1,2]
    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        if (nums[mid] == target) {
            return mid;
        }
        // left sorted
        if (nums[left] <= nums[mid]) {
            if (target >= nums[left] && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }

        }
        // right sorted
        else {
            if (target > nums[mid] && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return -1;


    }
}
