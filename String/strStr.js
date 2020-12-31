/**
 实现strStr() 函数
 给定一个 haystack 字符串和一个 needle 字符串 ，在haystack 字符串中找出needle 字符串中出现的第一个位置(从0 开始) ，如果不存在，则返回-1
  示例 1:
  输入: haystack = "hello", needle = "ll"
  输出: 2

  示例 2:
  输入: haystack = "aaaaa", needle = "bba"
  输出: -1

  注意当 needle 是空字符串时，应该返回什么值呢，这是一个在面试中很好的问题
  对于本题而言 当needle 为空字符串是，我们应该返回 0 

  https://leetcode-cn.com/problems/implement-strstr/solution/kmp-suan-fa-xiang-jie-by-labuladong/
 */

/**
  审题：字符串  字符串出现的第一个位置  找到即结束 return index 即可 找不到 返回-1  
  即默认是-1 然后进行修改

  双指针方式
  使用滑窗的方式
 */

/**
 * 
 * @param {string} haystack 
 * @param {string} needle 
 * @return {number}
 */


// 子串逐一比较 线性时间复杂度
// 空间复杂度 O((N-L)L) 空间复杂度 O(1)
const strStr = function (haystack, needle){
  if (typeof needle === 'string' && needle.length == 0){
    return 0
  }
  const length = needle.length;
  for (let i = 0; i < haystack.length - length+1;i++){
    const tempWord = haystack.substring(i, i+length);
    if (tempWord === needle){
      return i
    }
  }
  return -1;
}



/**
 KMP 算法永远不回退txt 的指针i，不走回头路 不会重复扫描 txt，而是借助dp 数组中存储的信息把pat 移到正确的位置进行匹配
 空间换时间 动态规划

 移动位数 = 已匹配的字符数 - 对应的部分匹配值
 */


const strStr1 = (haystack, needle) =>{
  if (needle === '') return 0;
  let [i,j] =[0,0];
  const next =[]; // 找到一个next 数组
  const nextfunc =(p,next)=>{
    debugger;
    next[0]=-1;
    let [j,k] =[0,-1];
    while(j<p.length -1){
      if(k ===-1 || p[j]=== p[k]){
        if(p[++j] === p[++k]){
          next[j] = next[k]
        }else{
          next[j] =k;
        }
      }else{
        k =next[k]
      }
    }
  }
  nextfunc(needle,next)
  while(i<haystack.length && j<haystack.length){
    if (j === -1 || haystack[i] === needle[j] ){
      i++;
      j++;
    }else{
      // 回溯 找到对应的位置 无需回到最初
      j=next[j]
    }
  }


  if (j === needle.length) {
    // 移动位数 = 已匹配的字符数 - 对应的部分匹配值
    return i - j
  } else {
    // 没有找到 返回-1 
    return -1
  }
 }

const haystack = "hello", needle = "lo";
const haystack1 = "cabaabababc", needle1 = "ababc";
console.log(strStr1(haystack1, needle1))


