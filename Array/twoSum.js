/**
 给定一个整数数组nums 和 一个目标值 target，请你在该数组中找出和为目标值的那两个整数，并返回他们的数组下标
 你可以假设每种输入只会对应一个答案，但是，数组中同一个元素不能使用两遍

 示例:
给定 nums = [2, 7, 11, 15], target = 9
因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
 */

// hash存储当前值为位置信息
function twoSum(nums,target){
  if (nums.length === 0) return []
  const setNums ={};
  for(let i=0;i<nums.length;i++){
    setNums[nums[i]]= i;
  }

  for(let i=0;i<nums.length;i++){
    let startNumber = nums[i];
    const otherNumber = target - startNumber;
    if (setNums[otherNumber] && setNums[otherNumber]!==i){
      return [i, setNums[otherNumber]]
    }
  }

  return [];

}

function twoSum1(nums, target){
  debugger;
  const setNums = {};
  for(let i=0;i<nums.length;i++){
    if (setNums[nums[i]]!==undefined){
      return [i, setNums[nums[i]]]
    }else{
      // 没有匹配的记录数据位置
      setNums[target-nums[i]]= i
    }
  }
}

const nums =[2, 7, 11, 15], target = 9; 
console.log(twoSum1(nums, target))