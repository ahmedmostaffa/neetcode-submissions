class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
 topKFrequent(nums, k) {
    var map=new Map();
    nums.forEach((element) => {
        map.set(element,map.get(element) ? 1 + map.get(element) : 1);
    });
    console.log(map);
    var arr=Array.from(map).sort((a,b)=>b[1]-a[1]);
    console.log(arr);
    var result=[];
    for(var i=0;i<k;i++){
        result.push(arr[i][0]);
    }
    return result;
}
}
