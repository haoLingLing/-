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
  let minDifference = undefined;
  let totalNum = 0;
  for (let i = 0; i < innerNumber.length-2;i++){
    for (let j = i + 1; j < innerNumber.length-1;j++){
      let k = j+1;
      while (k < innerNumber.length){
        let sum = innerNumber[i] + innerNumber[j] + innerNumber[k];
        k++;
        // 默认赋值
        if (minDifference === undefined){
          minDifference = Math.abs(sum - target);
          totalNum = sum;
          continue;
        }
        // 最小值设置
        if (minDifference >= Math.abs(sum - target)) {
          totalNum = sum;
          minDifference = Math.abs(sum - target);
        }
      }
    }
  }
  return totalNum;
};

// 排序的方式 双指针的方法 存在一个变量记录差值 每次循环进行对比
// 双指针进行缩小，如果当前的值和下一值相等，则跳过，继续进入下一个值
const threeSumClosest1 = function (nums, target) {
  nums.sort((a, b) => a - b);
  const len = nums.length;
  let minDifference = Infinity;
  let totalNum = nums[0] + nums[1] + nums[len- 1];
  for(let i=0;i<len-2;i++){
    let j = i+1,k =len-1;
    while(j<k){
      let sum =  nums[i]+nums[j]+nums[k];
      if(sum === target) return sum ;
      if (Math.abs(target - sum) <= minDifference){
        minDifference = Math.abs(target - sum);
        totalNum = sum;
      }
      if(sum < target){
        j++;
        // 如果下一个数据和现在的相等则跳过
        while (j < k && nums[j] === nums[j-1]) { j++;} 
      }else{
        k--;
        while (j < k && nums[k] === nums[k+1]) { k--;}
      }
    }

  }
  return totalNum;
};


const nums = [-1, 2, 1, -4], target = 5;
const nums1 =[0,1,1,4],target1=3;
console.log(threeSumClosest1(nums1, target1))


