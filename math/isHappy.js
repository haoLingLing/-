/**
 202 快乐数
 编写一个算法来判断一个数 n 是不是快乐数。
  「快乐数」定义为：对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和，然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。如果 可以变为  1，那么这个数就是快乐数。

  如果 n 是快乐数就返回 True ；不是，则返回 False 。
  示例：
  输入：19
  输出：true
  解释：
  12 + 92 = 82
  82 + 22 = 68
  62 + 82 = 100
  12 + 02 + 02 = 1
 */

/**
* @param {number} n
* @return {boolean}
*/

/**
 1 最后的结果为1
 2 进入一个循环 
 3 无限大 但是排除  因为9999999  的分开平方所有会降低
 */
var isHappy1 = function (n) {
  const getNext =(n)=>{
    const initArr = `${n}`.split('');
    let sum = 0;
    for (let i = 0; i < initArr.length;i++){
      sum += initArr[i] * initArr[i]
    }
    return sum
  } 

  const hashMap = new Set();
  while (n != 1 && !hashMap.has(n)){
    hashMap.add(n)
    n = getNext(n)
  }
  return n == 1;
  
};

// 快慢指针
const isHappy =(n)=>{
  const getNext = (n) => {
    const initArr = `${n}`.split('');
    let sum = 0;
    for (let i = 0; i < initArr.length; i++) {
      sum += initArr[i] * initArr[i]
    }
    return sum
  } 

  let fastPoint = getNext(n), slowPoint = n;
  while (fastPoint !== 1 && fastPoint !== slowPoint){
    slowPoint = getNext(slowPoint)
    fastPoint = getNext(getNext(fastPoint));
  }

  return fastPoint ==1 ;
}

const n=19;
console.log(isHappy(19))


// 总结 快乐数 只是一类数据的定义 关键是找到方法， 找齐规律，然后将其思想的方式转换成计算机语言的方式 这个和快慢指针的方式 
// 1 是否是循环链表
// 2 什么条件是最后的终结条件