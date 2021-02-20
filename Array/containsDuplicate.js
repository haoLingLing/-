/**
 哈希算法
 217 存在重复元素
 给定一个整数数组，判断是否存在重复元素
 如果存在一值在数组中出现至少两次，函数返回true，如果数组中每个元素都不相同，则返回false

 示例1 
 输入 [1,2,3,1]
 输出 true

 示例2 
 输入[1,2,3,4]
 输出 false
 */


const containsDuplicate=(nums)=>{
  let hashMap={};
  if(nums.length===0) return false ;
  for(let i =0;i<nums.length;i++){
    if (hashMap[nums[i]]){
      return true
    }else{
      hashMap[nums[i]]  = true
    }
  }

  return false
}


// ES6 算法
const containsDuplicate = (nums) => {
  if (nums.length === 0) return false;
  return !(new Set(nums).size === nums.length);
}