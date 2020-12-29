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

const haystack = "hello", needle = "lo";
console.log(strStr(haystack, needle))

/**
 KMP 算法永远不回退txt 的指针i，不走回头路 不会重复扫描 txt，而是借助dp 数组中存储的信息把pat 移到正确的位置进行匹配
 空间换时间 动态规划
 */