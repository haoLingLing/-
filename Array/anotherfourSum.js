/**
  给定一个包含n个整数数组 nums 和一个目标值 target，判断nums 中是否存在四个元素 a、b、c、d、使得 a+b+c+d 与target 相同，，找出所有满足条件且不重复的四元组

  注意：
  答案中不可以包含重复的四元组

  示例：
  给定数组 nums=[1,0,-1,0,-2,2] 和 target = 0;
  满足要求的四元组集合为
  [
    [-1,0,0,1],
    [-2,-1,1,2],
    [-2,0,0,2]
  ]

 */

 /**
  思路 
  1 四个数字相加
  2 不重复 排序 避免了不重复 [-2,-1,0,0,1,2]
  3 滑窗法 查找子串、子数组 快指针和慢指针
  4 慢指针 保留在数组第一个 快指针 
  5 sum = nums[i] + num[j] + num[j+1] + nums[j+2]
  6 结束条件  i<nums.length-3 j<nums.length-2
  */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */

const fourSum = (nums,target) =>{
  // 排序
  nums.sort((a,b)=>a-b);
  const length = nums.length;
  let targetArray = [];
  if(length<3){
    return []
  }
 
  for (let i = 0; i < length-3;i++){
    // 不重复的数据 下一个数据和上一个相等，则跳过
    if (nums[i] === nums[i - 1]) {
      continue;
    }
    // 如果最小的四位数都比target大，说明没有符合条件的数据
    if (nums[i] + nums[i+1] + nums[i+2] + nums[i+3] > target) {
      break;
    }
    for (let j = i+1; j < length-2;j++){
      // 不重复的数据 下一个数据和上一个相等，则跳过
      if(j>i+1 && nums[j] === nums[j-1]){
        continue;
      }
      let m = j + 1, k = length-1;
      while(m<k){
        let sum = nums[i] + nums[j] + nums[m] + nums[k];
        if(sum === target){
          targetArray.push([nums[i], nums[j], nums[m], nums[k]]);
          while (m < k && nums[m] === nums[m + 1]) m++;
          m++;
        } else if (sum < target){
          m++;
        }else{
          k--;
        }
      }

    }

  }

  return targetArray;
}


// const nums = [1, 0, -1, 0, -2, 2]; 
// const nums=[];
// const nums =[0,0,0,0]
const nums =[-2,0,0,0,0,3,4,2,-1,1]
console.log(fourSum(nums,0))

/**
  总结
 时间复杂度 O(n^3)
 空间复杂度 O(n)

 固定两个数 i j 所求的就是sum-nums[i]-nums[j]
 剩下的数据中使用左右指针的方式 左右指针需要知道结束的条件
 需要注意的是 题目要求不可以有重复的，所以在查找的过程 接下来的数据和上一个相等，跳过就好
 */


