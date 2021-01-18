/**
 326 3的幂
 给定一个整数，写一个函数来判断它是否是3的幂次方，如果是，返回true，否则 返回false
 整数n 是3的幂次方需满足 存在整数x 使得 n===3^X

 示例 n = 27  输出 true
 示例 n = 0   输出false


 要求：不使用循环或者递归
 */

 /**
  * 
  * @param {*} n 
  * @return {boolean}
  */

// 首先考虑的递归
 const isPowerOfTree1 = (n)=>{
   let num = n;
   // 大于3  并且可以被整除 如果出现小数 就说明不可以被整除
   while(num>=3 && num>>> 0 === num){
     num = num / 3;
   }

   return num===1;
 }


 // y = 3^x  x = log3x = ln x /ln 3
 // 判断是不是整数 %1 ===0 
const isPowerOfTree =(n)=>{
  return Math.log10(n) / Math.log10(3) %1 ===0
}