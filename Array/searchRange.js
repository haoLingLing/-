
/**
 在排序数组中查找元素的第一个和最后一个位置
 给定一个按照升序排列的整数数组nums 和一个目标值target 找出给定目标值在数组中的开始位置和结束位置
 如果数组中不存在target 返回[-1，-1]

 进阶 
 可以设计并实现时间复杂度为O(logn) 的算法解决问题么】

 示例：
 输入nums=[5,7,7,8,8,10],target=8;
 输出【3，4】

 示例 2：
  输入：nums = [5,7,7,8,8,10], target = 6
  输出：[-1,-1]

 示例 3：
  输入：nums = [], target = 0
  输出：[-1,-1]
 */

 /**
  思路：
    在排序数组中，说明数组是有顺序的 升序
    找到目标位置在数组中的位置 start right 
    结束条件，前一位数据不等，当前一位数据相等 找到第一个位置
            当前位置相等，后一位数据不等  找到第二个位置

    算法复杂度为O(logn) 说明需要使用二分法
  */

  // 暴力法
const searchRange=(nums,target)=>{
  let targetRange=[-1,-1];
  const length = nums.length;
  // 排除一些特殊的解
  if (length == 0 || target < nums[0] || target > nums[length-1]){
    return targetRange;
  }

  let left = 0;
  while(left<length){
    // 找到左区间
    if (nums[left - 1] !== target && nums[left] === target){
      targetRange[0]= left;
    }
    // 找到右区间
    if(nums[left]===target && nums[left+1]!==target){
      targetRange[1] = left;
    }
    left++;
  }

  return targetRange;
}

const  binaryfirstSearch =(nums,target)=>{
  let left = 0;right = nums.length,ans = nums.length;
  while(left<right){
    const mid = (left + right) >>>1;
    if(nums[mid]<target){
      //区间 [mid+1,right]
      left = mid + 1;
    } else if (nums[mid] ===target){
      // 区间 [left,mid]
      right = mid;
    }else{
      right = mid -1;
    }
  }
  if (nums[left] === target) {
    return left
  }
  return -1;
}

const binaryLastSearch =(nums,target)=>{
  let left = 0; right = nums.length-1, ans = nums.length;
  while(left<right){
    const mid = (left + right +1) >>>1;
    if(nums[mid]>target){
      // 区间是 [left,mid-1]
      right = mid -1;
    }else if(nums[mid]===target){
      // 区间是 [mid,right]
      left = mid;
    }else{
      left = mid+1;
    }
  }
  return left;
}


const searchRange1=(nums,target)=>{
  let targetRange = [-1, -1];
  const length = nums.length;
  // 排除一些特殊的解
  if (length == 0 || target < nums[0] || target > nums[length - 1]) {
    return targetRange;
  }

  // 使用二分法 如果中间的数相等 则需要两边都要找  则需要分开计算下边界 和上边界 
  const first = binaryfirstSearch(nums, target);
  if(first === -1){
    return targetRange;
  }
  const last = binaryLastSearch(nums, target);
  return [first, last]

}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange2 = function (nums, target) {
  const leftIndex = binarySearch(nums, target, true);
  const rightIndex = binarySearch(nums, target, false) - 1;
  if (nums[leftIndex] === target && nums[rightIndex] === target) {
    console.log(leftIndex, rightIndex);
    return [leftIndex, rightIndex];
  }
  return [-1, -1];
};

var binarySearch = function (nums, target, lower) {
  let left = 0;
  let right = nums.length;
  let flag = nums.length;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] > target || (lower && nums[mid] >= target)) {
      right = mid - 1;
      flag = mid;
    } else {
      left = mid + 1;
    }
  }
  return flag;
}

const nums = [5, 7, 7, 8, 8, 10], target = 8;
// const nums =[1],target = 1;
console.log(searchRange1(nums, target))




// 总结 二分法需要注意的是开闭区间的问题 是否会进入死循环 一般都是向下取整 >>>0 
// 如果出现left === mid 需要将mid 取值为上取整 
// 二分法需要注意的是 边界的处理，一不小心就会造成死循环