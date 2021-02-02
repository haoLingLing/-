/**
 674 最长连续递增序列
 给定一个未经排序的整数数组，找到最长的且连续递增的子序列，并返回该序列的长度

 连续递增的子序列，可以由两个下标l 和r (l<r)  确定，如果对于每个 1<=i<r 都有nums[i]<nums[i+l] 那么子序列
 [nums[l],nums[l+1],...,nums[r-1],nums[r]] 都是连续递增子序列

 示例
 输入 nums=[1,3,5,4,7] 输出3 [1,3,5]
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
const findLengthOfLCIS=(nums)=>{
  if(nums.length ===0){
    return 0 
  }
   let resultLength =1;
   let i =0,j=1;
   while(j<nums.length){
     if(nums[j]<=nums[j-1]){
       resultLength = Math.max(resultLength, j - i);
       i = j;
     }
     j++;
   }
  return Math.max(resultLength, j - i);
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  let count = 1, stringLength = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < nums[i + 1]) {
      ++count
    } else {
      stringLength = Math.max(stringLength, count);
      count = 1;
    }
    stringLength = Math.max(stringLength, count);
  }

  if (nums.length == 0) {
    stringLength = 0
  }
  return stringLength;
};

const nums = [1, 3, 5, 4, 7] ;
console.log(findLengthOfLCIS(nums))


// 双指针的方式 也可以不使用i,j  使用第二种方式