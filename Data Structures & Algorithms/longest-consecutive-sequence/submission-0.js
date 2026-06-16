class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
     longestConsecutive(nums) {
  if (nums.length === 0) return 0;
    let longest=0;
  const set = new Set(nums);
    for(let num of set){
        if(!set.has(num-1)){
            let length=0;
            while(set.has(num+length)){
                length++;
            }
            longest=Math.max(longest,length)

        }
    }

  return longest;
     }}
