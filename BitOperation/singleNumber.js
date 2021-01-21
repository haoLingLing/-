/**
 260 只出现一个的数字 
 给定一个整数数字 nums 其中恰好有两个元素只出现一次，其余所有元素均出现两次，找出只出现一次的那两个元素
 示例
 输入[1,2,1,3,2,5] 输出[3,5]
 */

/**
 * @param {number[]} nums 
 * @return {number[]}
 */


 // 桶排序
const singleNumber1=(nums)=>{
  const hashMap = {};
  for (let i = 0; i < nums.length; i++) {
    hashMap[nums[i]] = (hashMap[nums[i]] || 0) + 1;
  }

  const resultArr=[];
  for (let num in hashMap){
    if (hashMap[num] ===1){
      resultArr.push(num)
    }
  }

  return resultArr;
}

// 两个掩码
// A^B=C C^A=B C^B=A
// 1^2^3^4^4^3 = 1^2
const singleNumber=(nums)=>{
  debugger;
  let bitmask=0;
  for(let i=0;i<nums.length;i++){
    bitmask ^= nums[i];
  }

  // 知道一个为1 的数字  将最低位变成1
  let diff = bitmask & (-bitmask);
  let x=0;
  for(let i =0 ;i<nums.length;i++){
    if ((nums[i] & diff)!==0){
      console.log(nums[i])
      x ^= nums[i];
    }
  }

  return [x, bitmask^x] 
}


const nums = [1, 2, 3, 3, 2, 4];
console.log(singleNumber(nums))