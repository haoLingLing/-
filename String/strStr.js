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


// 空字符串 存在存储空间 是一个空集 任何一个字符串都是全集 任何一个空集都是集合的子集 即存在，所以将其设置为0 
// 初始情况  
// 初始化完成之后 是否需要判断 条件1 条件2 
// 重复之前的操作  大问题 同构的小问题 

// 初始化 如何操作 遇到不同的问题如何处理 重复第几步到第几步
// 突出什么 项目 独立负责项目或者是某些模块


/**
 * 设计计算机原理 网络的问题
  滚动hash 先生成
  hash  number 平时所看见的是16禁止的比较
  如何进行hash 比较
  2^32  16位  上线OXFFFFFFFF 
  4个Int
  如何拼接 999+1=1000 计算机中 低位在前 高位在后 
  大端和小端问题
  取决位CPU 和操作系统
  如何区分 数据通信 如何区分 
  大端 16进制 转成int 
  小端 作对比

  如何扩容 
  每一个去读取 效率比比较字符串的效率高

 */

