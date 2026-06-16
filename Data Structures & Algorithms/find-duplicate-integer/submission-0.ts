class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums: number[]): number {
        var map = new Map<number, number>();
        for(const num of nums){
            map.set(
                num,
                (map.get(num) ?? 0) + 1
            );
        }
        for(const [key,value] of map.entries()){
            if(value>1) {
                return key;
            }
        }
        return -1;
    }
}
