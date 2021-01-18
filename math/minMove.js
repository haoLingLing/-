/**
 453 最小操作次数使数组元素相等

 给定一个长度为n 的非空整数数组，每次操作将会使n-1个元素增加1，找出让所有元素相等的最小操作数

 示例
 输入[1,2,3] 输出3
 解释 [1,2,3] => [2,3,3]=>[3,4,3] => [4,4,4]
 
 */


/**
 * @param {number[]} nums
 * @return {number} 
 */

 // 思考一 
 // 1 非空数组 长度为n

 // [1,2] => [2,2]
 //                   [1,2,3] => [2,3,3]=>[3,4,3] => [4,4,4]
 // [1,2,5]=>[2,3,5]=>[3,4,5] => [4,5,5]=>[4,6,5] => [6,6,6]
 //                   [1,2,3,4]=>[2,3,4,4]=>[3,4,5,4]=>[4,5,5,5]=>[5,6,6,5]=>[6,7,6,6]=>[7,7,7,7]
 // [1,2,3,4] [1,2,3,3] [1,2,2,3] [1,2,2,2] [1,1,2,2] [1,1,1,2] [1,1,1,1]
 // 规律就是最小的n-1 个数相加
 // 结束条件是什么  如果是连续递增的数据 如果是连续递增数据 2=>1 3=>3 4=>6 (n-2)*3 
 // 如果是递增数据 或者是求和 和最大的数据相等 每次都是将最大的数据找到
 // 操作n-1次 是怎样判断
 
 // 超时
 const minMove =(nums)=>{
  let result=0;
  const length = nums.length;
   let max = Math.max.apply(null, nums);
   // let max = Math.max(...nums)
   let min = Math.min.apply(null, nums);

   // 如果不想等的时候
   while (max !== min){
     result++
     let flag = false;
     for (let i = 0; i < nums.length; i++) {
       if (nums[i] !== max) {
         nums[i] = nums[i]+1;
       } else if (nums[i] === max && !flag) {
         flag = true;
       } else {
         // 如果存在一个了
         nums[i] = nums[i]+1;
       }
     }
     max = Math.max.apply(null, nums);
     sum = min = Math.min.apply(null, nums);
   }
   return result;
 }


 // 方法3 排序
 const nums=[1,2,3]
console.log(minMove(nums))



// 总结 n-1个元素增加一 将最大的元素减一