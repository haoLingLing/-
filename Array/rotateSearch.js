/**
 搜索旋转排序数组
 假设按照升序排序的数组在预先未知的某个点上进行了旋转
 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。
 搜索一个给定的目标值，如果数组中存在这个目标值，则返回它的索引，否则返回-1
 可以假设数组中不存在重复的元素
 你的算法时间必须是O(logn)级别
输入: nums = [4,5,6,7,0,1,2], target = 0
输出: 4
输入: nums = [4,5,6,7,0,1,2], target = 3
输出: -1

 */

/**
* @param {number[]} nums
* @param {number} target
* @return {number}
*/
// 最简单的方式 使用循环，一个一个进行比较，如果涉及到NaN,则不是很好处理
// var search = function (nums, target) {
//   if(nums.length<1) return -1;
//   let index = -1;
//   for(let i=0;i<nums.length;i++){
//     if (nums[i] === target){
//       index = i;
//       break;
//     }
//   }
//   return index;
// };


// 时间复杂度O(logn) 空间复杂度O(1)
// 二分法 一直使用左边的边界
// 

/**
 旋转的数组分成两部分的时候，肯定有一部分是有序的，[4,5,6,7],[0,1,2]
 这个就可以将进行二分法 mid 位置进行分割 [1,mid] [mid+1 ,r];

 如果[1,mid] 有序，且target 的大小满足[nums[1],nums[mid]] ,则我们应该缩小范围至 [1,mid-1] 否则在[mid+1,r] 中查找
 如果[mid,r] 有序，且target的大小满足 [nums[mid+1],nums[r]],则我们应该缩小范围至 [mid+1,r] 否则在[1,mid-1] 中寻找
 */
var search = function (nums, target) {
  if (nums.length < 1) return -1;
  debugger;
  let low=0;let high=nums.length;
  while(low!==high){
    const mid = (low + high)/2 >>>0;
    if(nums[mid] === target){
      return mid;
    }
    if (nums[low] <= nums[mid]){
       if(nums[low]<target && target< nums[mid]){
         high = mid;
       }else{
         low = mid+1;
       }
    }else{
      if (nums[mid]< target && target<nums[high-1]){
        low = mid+1;
      }else{
        high = mid;
      }
    }
  }
  return -1
};

const nums = [4, 5, 6, 7, 0, 1, 2], target = 4;
// console.log(search(nums, target))



/**
  搜索旋转排序数组II

  假设按照升序排序的数组在预先未知的某个点上进行了旋转
  例如数组[0,0,1,2,2,5,6] 可能变成[2,5,6,0,0,1,2]
  编写一个函数来判断给定的目标值是否存在数组中，若存在则返回true，否则返回false

  [0,1,1,1,1,1,1,2] [1,1,1,1,2,0,1]

  和上一道题的区别死 本题中nums可能包含重复元素 这会影响时间复杂度么，会有怎么样的影响，为什么？

  A[m]>=A[1] 不能确定递增
  A[m]>A[1] 则区间[1,m] 一定递增
  A[m]=A[1] 确定不了，则1++，往下一步看

  
 */

const search = function(nums,target){
  if (nums.length < 1) return false;
  let low = 0; let high = nums.length;
  while (low !== high){
    const mid = (low + high) / 2 >>> 0;
    if (nums[mid] === target) {
      return true;
    };
    if(nums[low]<nums[mid]){
      if(nums[low]<=target&& target <= nums[mid]){
        high=mid;
      }else{
        low = mid+1;
      }
    }else if(nums[low]>nums[mid]){
      if (nums[mid] <= target && target <= nums[high-1]) {
        low = mid+1;
      } else {
        high = mid;
      }
    }else{
      // 其实是过滤了重复的数据
      low++;
    }
  }
  return false
}


const nums1 = [5,1,3], target1 = 3;
console.log(search2(nums1, target1))