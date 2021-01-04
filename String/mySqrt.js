/**
 x 的平方根
 实现 int sqrt(int x) 函数
 计算 并返回x 的平方根，其中x是非负整数
 由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去

 示例
 输入4 输出2 
 输入8 输出2  8的平方根式2.82... 所以返回的是2 
 */

 /**
  思考 
  所求的是平方根 知道的唯一条件就是就是所求的x 以及计算条件 2
  */

/**
 * 
 * @param {number} x 
 * @return {number}
 */
 const mySqrt = function(x){
   // 最大值设置为自己
   let start = 0, end = x;
   if(x==0) return 0;
   if(x==1) return 1;
   // 结束条件
   while(start<end){
     // 结束条件
     const mid = (start + end) / 2 >>> 0 ;
     if (mid * mid === x){
       return mid
     } else if (mid * mid >x){
       //如果是偏大 则将end 降低
       end = mid 
     }else{
       // 如果是偏小，则将start 增大
       start =mid
     }

     // 还有 一个结束条件 如果x 是开不尽的数字
     if(start+1 === end && start*start <x && end*end >x){
       return start
     }
   }
 }

const x= 2;
console.log(mySqrt(x))