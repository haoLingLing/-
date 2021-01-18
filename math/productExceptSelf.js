/**
 238 除自身以外数组的乘积
 给你一个长度为n 的整数数组nums,其中n>1,返回输出数组 output,其中 output[i] 等于nums中➗nums[i] 之外其余各元素的乘积
 
 示例
 输入 [1,2,3,4]
 输出 [24,12,8,6]

 提示 不要使用除法
 */

 // 思考一  计算出所有数据的乘积，然后除以当前的数据 暴力解法 如果某一个元素为0 ，则不可以相除 
 // 思考二  前缀元素和后缀元素  [1,2,3,4] [1][2,3,4] [1][3,4]
 // 要求 O(n) 时间复杂度


 /**
  * @param {number} nums 
  * @return {number}
  */

  
  // 如果不计算answerArray 的复杂读
  // 空间复杂度 O(3n) 
  // 时间复杂度 O(3n)
 const productExceptself1 = (nums) =>{
  let leftArray=[1],rightArray=[],answerArray=[];
  for(let i =1;i<nums.length;i++){
    leftArray[i] = nums[i-1] * leftArray[i-1];
  }

   console.log(leftArray)
   rightArray[nums.length - 1] = 1;
   for (let i = nums.length - 2;i>=0;i--){
     rightArray[i] = nums[i+1] * rightArray[i+1]
   }
   console.log(rightArray)

   for(let i =0;i<nums.length;i++){
     answerArray[i] = leftArray[i] * rightArray[i]
   }

   return answerArray;
 }


 // 空间复杂度 O(2n) 
  // 时间复杂度 O(2n)
const productExceptself2 = (nums) => {
  let answerArray = [1], rightArray = [];
  for (let i = 1; i < nums.length; i++) {
    answerArray[i] = nums[i - 1] * answerArray[i - 1];
  }

  rightArray[nums.length - 1] = 1;
  for (let i = nums.length - 2; i >= 0; i--) {
    rightArray[i] = nums[i + 1] * rightArray[i + 1];
    answerArray[i] = answerArray[i] * rightArray[i]
  }

  return answerArray;
}

const productExceptself = (nums) => {
  // R 只是存储了一个变量而已 就是从右开始的数据
  let answerArray = [1], R = 1;
  for (let i = 1; i < nums.length; i++) {
    answerArray[i] = nums[i - 1] * answerArray[i - 1];
  }

  for (let i = nums.length - 1; i >= 0; i--) {
   // 需要将最后一个数据遍历进去，所以先乘，然后再存储数据 递减
    answerArray[i] = answerArray[i] * R;
    R = nums[i] * R;
  }

  return answerArray;
}

const nums = [1, 2, 3, 4];
console.log(productExceptself(nums))

// 总结，如果是需要在数组中找寻规律，需要将公式写出来 然后一个个找到规律 an= a0*a1*a2*an-1 am = a0*a1*a2*am-1 * am+1+...+an
// 需要将提示中的内容全部看完
