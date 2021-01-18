/**
 504 七进制数
 给定一个整数，将其转化为7进制，并以字符串形式输出
 输入 100 输出 202
 输入 -7 -10

 */

/**
  将其转换成为7进制 js的方法是 (num).toString(7) 

  七进制是以7为底数的计数系统，使用的是0-6
  七进制通常表示的是循环小数，除非分母是七的倍数，
  202  2*7^0 + 0*7^1 + 2*7^2 = 2+49*2 =101  2*7 14 21 28 35 42 49
  短除法的方式 记录余数 当除数小于当前的的进制 余数即为当前的数
 */

 /**
  * @param {number} num 
  * @return {string}
  */

 const coverTobase=function(num,base){
   let resultString="";
   let divisor = Math.abs(num);
   while (divisor>=base){
     resultString = (divisor % base) + resultString 
     divisor = divisor / base >>> 0;
   }
   resultString = divisor + resultString;
   return num > 0 ? resultString : '-'+resultString;
 }

const num =100;
console.log(coverTobase(-7,7))

// 总结 短除法找到因子 然后去计算 可以计算7进制，也可以看作是其他进制的问题 都是基本原理