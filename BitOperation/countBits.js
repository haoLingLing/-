/**
 338 比特位计数
 给定一个非负整数nums 对于0<=i<=num 范围内的每个数字i，计算其二进制数中的1的数目并将它们作为数组返回

 示例 1:
  输入: 2
  输出: [0,1,1]

 示例 2:
  输入: 5
  输出: [0,1,1,2,1,2]
 */

const countBits=(num)=>{
  let nums=[]
  for(let i =0;i<=num;i++){
    nums[i]=i;
  }
  let result=[0];
  for(let i=0;i<nums.length;i++){
    if (nums[i]%2===1){
      result[i]= result[i-1]+1;
    }else{
      result[i] = result[i/2]
    }
  }
  return result;
}


const nums = 5;
console.log(countBits(nums))
