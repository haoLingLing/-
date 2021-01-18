/**
 * 阶乘后的零
 * 给定一个整数n,返回n! 结果尾数中的零
  示例1
    输入：3 输出0  解释 3！=6 尾数没有0 
  
  示例2
    输入5  输出1  解释 5！=120  尾数中有1个零

  算法复杂度O(logn)
  
 */


 /*
   给定一个整数n 结果为0 
   
   5*2
   5*4
   5*6
   5*8
   5*10
   5*12

   存在logn 说明是二分法 说明是短除法 有2 
   中间存在有多少个5 除法 5
  */

 /**
  * @param {number} n 
  * @return {number} 
  */


// 计算阶乘

const factorial=(num,sum)=>{
  const initNum = num;
  if(num===1){
    return sum
  }
  return factorial(--num, sum * initNum)
}

const trailingZeroes1 = (n)=>{
  if(n==0) return 0;
  let result = factorial(n,1);
  let i =0;
  while (result%10 === 0){
    i++;
    result = result/10;
  }
  return i;
}

// 上述计算的不能将所有的进行查处，一旦超出number计算之后，就不能使用递归查找到最后的结果
// console.log(trailingZeroes(30)) 出现科学技术法 2.652528598121911e+32 不能计算了

// 因子相乘 出现0的次数 2*5 10  2个0 2*5*2*5 出现0 的次数都是10*10*10 其他的都是常数项 所以要知道0的数据，所以需要找出0 的数据
// 出现5的因子 可以 寻找公因子 分解因式
// 由于出现2的次数比较多，一般计算的都是5的次数，所以只求5的次数就可以
//  时间复杂度O(1) 空间复杂度O(logn)
const trailingZeroes=(n)=>{
  if(n===0) return 0;
  let factor5=0;
  for(let i=5;i<n+1;i+=5){
    let num= i;
    while (num%5===0){
      num = num / 5; 
      factor5++;
    }
  }

  return factor5;
}

console.log(123,trailingZeroes(30))

// 总结 这个问题是考虑的短除法 这些算法基本上都是需要最基础的数学问题，如果需要知道这些规律，需要就去找