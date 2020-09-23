/**
 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和

 */

/**
 * @param {number[]} nums
 * @return {number}
 */

 /**
  方法一：
  时间复杂度O(n)
  空间复杂度O(1)
  
  */
const  maxSubArray = function (nums) {
  let pre=0,maxSum= nums[0];
  nums.forEach(x=>{
    pre = Math.max(pre+x,x);
    maxSum = Math.max(maxSum, pre);
  })
  return maxSum;
};




/**
 * 暴力法
 */
const maxSubArray1 =function(nums){
  if (nums.length==0) return;
  let maxSum =nums[0];
  let pre =0;
  for(let i=1;i<nums.length;i++){
    pre = Math.max(pre + nums[i], nums[i]);
    maxSum = Math.max(maxSum, pre)
  }
  return maxSum;
}

const nums = [-2, 1, 4,-3,2,4];
console.log(maxSubArray1(nums))