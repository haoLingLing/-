/**
 342 4的幂
 给定一个整数，写一个函数来判断它是否是4的幂次方，如果是，返回true，否则返回false

 整数n是4的幂次方需满足 存在整数x 使得 n===4^x

 输入 n=16 输出true
 输入 n=5 输出 false
 输入 n=1 输出true

 -231 <= n <= 231 - 1

 进阶 不使用循环或者递归来完成本题么
 */

 /**
  * @param {number} n
  * @return {boolean} 
  */

// 循环递归  104ms
// 时间复杂度 O(logn)
const isPowerOfFour1=(n)=>{
  if(n===0) return false;
  while(n%4===0){
    n/=4;
  }
  return n===1;
}


// 数学公式 和求3的幂的解决方式是一样的 log10(n)/log10(3) 96ms
// 时间复杂度 O(1)
const isPowerOfFour2 = (n) => {
  return Math.log10(n) / Math.log10(4) % 1 === 0
}

// 位运算 可以被2整除 n&1==0 但是可以被2整除的不一定被4整数  
// 数学归纳法 4^K = (3+1)^K =...=3+1 也是整除3 余1 
// 如果n是偶数  并且是2的幂次的整数 偶数为为1 奇数位为0 所以此时 n&(n-1) 可以排除不是2的幂次的  n%3===1 确保是4的幂次的
// 96ms
// 时间复杂度 O(1)
const isPowerOfFour3 = (n) => {
  return n>0 && (n & (n-1)) === 0  && n%3 ===1;
}

// 16进制 0xaaaaaaaa === 2进制的 32位 10101010101010101010101010101010
// 4 的进制都是 在奇数位 0101  2的幂是 1010  
const isPowerOfFour = (n) => {
  return n > 0 && (n & (n - 1)) === 0 && n & 0xaaaaaaaa == 0;
}


const num= 63;
console.log(isPowerOfFour(num))


/**
 总结 0xaaaaaaaa 10101010101010101010101010101010
     0xffffffff  11111111111111111111111111111111 所以在计算机中是0-255
     4 的幂次方 n&(n-1) ===0 
     4 的进制都是 在奇数位 0101  2的幂是 1010
     就是判断是否为偶数 n&1===0
     判断是否是奇数 n&1!==0 


     
 */