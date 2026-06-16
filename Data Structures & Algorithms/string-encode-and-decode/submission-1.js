class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
   encode(strs) {
    return strs.map(str=>`${str.length}#${str}`)
    .join(''); 
    }
// 4#Neet4#Code
  decode(str) {
   const result=[];
   let i=0;
   while(i<str.length){
       let j=i;
       // get # 
       while(str.charAt(j)!='#'){
            j++;
       }
       let length=parseInt(str.substring(i,j))
       j++;
       result.push(str.substring(j,j+length))
       i=j+length;
   }
   return result;

}
}
