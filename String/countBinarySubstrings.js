/**
 696 计数二进制字串
  给定一个字符串s,计算相同数量的0和1 的非空连续子字符串的数量，并且这些子字符串的所有0和1 都是组合在一起的
  重复出现的字串要计算它们出现的次数

  示例1
  输入 '00110011' 输出6 
  解释 有多少个字串具有相同个数的0和1 0011 01  1100 10  0011

  请注意： 一些重复出现的字串需要计算它们出现的次数

  示例2 10101 
  解释 10 01 10 01 4   
 */

 /**
  思考：具有相同数量连续的1和0 
  指针的算  先去移动数据
  需要两个变量 0 count0 count1 
  提交判断 0 还是1 
  */

/**
 * @param {string} s 
 * @return {number}
 */

// 双指针
// 时间复杂度 O(n) 空间复杂度  O(n)
const countBinarySubstrings1 =(s)=>{
  let counts =[];
  let ptr=0, n=s.length;
  while (ptr<n){
    const c = s[ptr];
    let count =0;
    while (ptr<n && s[ptr]===c){
      ++ptr;
      ++count;
    }
    counts.push(count)
  }

  let ans =0;
  for(let i=1;i<counts.length;i++){
    ans+= Math.min(counts[i],counts[i-1])
  }
  return ans;
}


// 正如上述所说的是 所关心的当前的和前一个
// 时间复杂度O(n) 空间复杂度O(1)
const countBinarySubstrings = (s) => {
  let ans = 0, last =0;
  let ptr = 0, n = s.length;
  while (ptr < n) {
    const c = s[ptr];
    let count = 0;
    while (ptr < n && s[ptr] === c) {
      ++ptr;
      ++count;
    }
    ans+= Math.min(count,last);
    last = count;
  }

  return ans;
}


console.time();
const s ='00110011';
console.log(countBinarySubstrings1(s));
console.timeEnd()


// 总结s.chrtAt(number) 返回下标的地址
