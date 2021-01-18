/**
 415 字符串相加 
 给定两个字符串的形式的非负整数 num1 和 num2 计算它们的和

 提示
 1  num1 和 num2 长度都小于5100 
 2  num1 和 num2 都会包含数字 0-9
 3  num1 和 num2 不包含任何前导0 
 4 不能使用内建的BigInter 库，也不能将字符串转化为 整数形式
 */

 // 进制的加法计算 满10 进1 

const addStrings1 = (num1,num2)=>{
  let left = num1.length - 1, right = num2.length - 1, add = 0;
  let resultArrr = [];
  while (left >= 0 || right >= 0 || add != 0) {
    // left right >=0 在0 的时候需要取的到数值 取到的是字符串 -0 直接转换为number
    const x = left >= 0 ? num1[left]- 0 : 0;
    const y = right >= 0 ? num2[right]- 0 : 0;
    // 满10进1 
    const sum = x + y + add; 
    // 从后往前追加
    resultArrr.unshift(sum % 10);
    add = sum / 10 >>> 0;
    left--;
    right--;
  }
  return resultArrr.join('')
}


const addStrings = (num1, num2) => {
  let left = num1.length - 1, right = num2.length - 1, add = 0;
  let string = '';
  while (left >= 0 || right >= 0) {
    // left right >=0 在0 的时候需要取的到数值 取到的是字符串 -0 直接转换为number
    const x = left >= 0 ? num1[left] - 0 : 0;
    const y = right >= 0 ? num2[right] - 0 : 0;
    // 满10进1 
    const sum = x + y + add;
    // 从后往前追加
    string = sum % 10 + string;
    add = sum / 10 >>> 0;
    left--;
    right--;
  }
  return add > 0 && add + string || string
}

const num1='9',num2='99';
console.log(addStrings(num1,num2))


// 总结 对于数字相加 无论 十进制 或者其他几进制 需要考虑的都是满多少进多少 

/**
  用语言组织代码
  思路 满10 进一的思想
  1 需要两个变量 存储数据的长度 找出在计算的数字 
  2 满10进一 保存>10  的状态 add
  3 需要一个return string 变量
  4 在 left right 各自大于0 的时候 执行循环
  5 最后需要判断数据是add 大于0 
 */