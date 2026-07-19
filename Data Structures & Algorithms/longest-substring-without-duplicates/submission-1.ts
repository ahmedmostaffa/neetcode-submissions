class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string) {
    var window=new Set<String>();
    let left=0;
    let max=0;
    for (let right=0;right<s.length;right++){
        while(window.has(s.charAt(right))){
            window.delete(s.charAt(left));
            left++;
        }
        window.add(s.charAt(right))
        max =Math.max(max,right-left+1);
    }
    return max;

}
}
