/**
 * 排序 默认都是整数进行排序
 */


/**
 * 
 * @param {*} nums 
 * @return {nums}
 */
 const bubbleSort=function(nums){
   if(nums.length===0) return nums;
   for(let i=0;i<nums.length;i++){
     for(let j=0;j<nums.length;j++){
       if (nums[j + 1] < nums[j]){
         const temp = nums[j+1];
         nums[j+1] = nums[j];
         nums[j] = temp;
       }
     }
   }
   return nums;
 }