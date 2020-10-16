/**
  给定一个包括n个整数的数组nums 和一个目标值target，找出nums 中的三个整数，使得它们的和与target接近，返回这三个数的和，假定每组输入只存在唯一的答案
  
  示例：
  输入：nums = [-1, 2, 1, -4], target = 1
  输出：2
  解释：与 target 最接近的和是 2(-1 + 2 + 1 = 2) 。
 */



/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

 // 3个数之和 最少有三个数
 // 最古老的方法 全排列 2 -3 -1 3个for 循环  产生的数组 然后找到最近的一个数 如果直接有这个数字 有一个绝对值的变量
const threeSumClosest = function (nums, target) {
  let innerNumber = nums.sort((a,b)=>a-b);
  let minDifference = null;
  let totalNum = 0;
  for (let i = 0; i < innerNumber.length;i++){
    let j = i+1;
    let k = innerNumber.length-1;
    while (j < innerNumber.length - 1){
      debugger;
      let sum = innerNumber[i] + innerNumber[j] + innerNumber[k];
      if (minDifference > Math.abs(sum - target)){
        totalNum = sum;
        minDifference = Math.abs(sum - target);
      }
      if (sum == target){
        return target;
      } else if (sum < target){
        j++
      }else{
        k++;
      }
    }
  }
  return totalNum;
};

const nums = [-1, 2, 1, -4], target = 5;
console.log(threeSumClosest(nums, target))


