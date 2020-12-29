/**
 给你一个数组nums 和一个值val,你需要原地移除所有数值等于val的元素，并返回除以后的新数组
 不要使用额外的数组空间，你必须仅使用O(1) 额外空间并原地修改输入数组
 元素的顺序可以改变，你不需要考虑数组重超出的新长度后面的元素


 示例 1:
  给定 nums = [3,2,2,3], val = 3,
  函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。
  你不需要考虑数组中超出新长度后面的元素。

示例 2:
  给定 nums = [0,1,2,2,3,0,4,2], val = 2,
  函数应该返回新的长度 5, 并且 nums 中的前五个元素为 0, 1, 3, 0, 4。
  注意这五个元素可为任意顺序。
  你不需要考虑数组中超出新长度后面的元素。

 */


/**
 * 
 * @param {*} nums 
 * @param {*} val 
 * @return {number}
 */

 const removeElement =function(nums,val){
   let numsLenth =  nums.length;
   let i=0;
   while (i < numsLenth){
     debugger;
     if (nums[i] === val) {
       nums[i] = nums[numsLenth - 1];
       console.log(nums)
       numsLenth--;
     }else{
       i++;
     }
   }
   
   return numsLenth;
 }

const nums = [3, 2, 2, 3], val = 3;
const nums1 = [0, 1, 2, 2, 3, 0, 4, 2], val1 = 2;
console.log(removeElement(nums, val));