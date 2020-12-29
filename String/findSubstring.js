/**
  给定一个字符串s 和一些长度相同的单词  words, 找出s中恰好可以由 words 中所有单词串联形成的子串的起始位置
  注意子串要与words 中的单词完全匹配，中间不能有其他字符，但是不需要考虑words 中单词的串联顺序。

  示例 1：

输入：
  s = "barfoothefoobarman",
  words = ["foo","bar"]
  输出：[0,9]
  解释：
  从索引 0 和 9 开始的子串分别是 "barfoo" 和 "foobar" 。
  输出的顺序不重要, [9,0] 也是有效答案。
  示例 2：

输入：
  s = "worgoodgoodgoodbestword",
  words = ["word","good","best","word"]
  输出：[]

 */

 /**
  审题
  长度相同的单词 长度是固定的
  words 中所有单词 串联形成的子串  不需要考虑串联顺序
  需要的是起起始位置 
  */




/**
 * 暴力法
 * words 中单词的所有组合 循环匹配一次 找出初始位置 不可取 全排列 n!
 * 然后找数据的时候双指针 i 返回i的足者
 */


/**
* @param {string} s
* @param {string[]} words
* @return {number[]}
*/


// barfoothefoobarman
var findSubstring = function (s, words) {
    const length = words.length;
    if(length<=0){
      return [];
    }
   const wordSize =  words[0].length;
   const allWordsSize = length * wordSize;
   let number = [];
   // hashMap 建立一个hash 表 
   let hashMap={};
   words.forEach(e => hashMap[e] = (hashMap[e] || 0)+1);
   // 滑窗思想
  for (let i = 0; i < s.length - allWordsSize+1;i++){
    let tempHashMap = { ...hashMap};
    const tempWords = s.slice(i, i + allWordsSize);
    let flag = true;
    for (let j = 0; j < tempWords.length; j += wordSize){
      let tempWord = tempWords.slice(j, j + wordSize);
      // 如果没有找到 则退出本次循环
      if (tempHashMap[tempWord]){
        tempHashMap[tempWord] = tempHashMap[tempWord] - 1;
      }else{
        flag = false;
        break;
      }
    }
     // 结束条件
    if (flag){
      number.push(i)
    }
  }
  return number;
};




let s = "barfoothefoobarman", words = ["foo", "bar"];
let s1 = "wordgoodgoodgoodbestword",
  words1 = ["good", "best", "word"]
console.log(findSubstring(s1, []))

/**
 总结： 1  需要好好审题  长度相同的单词 这个是一个突破口 随机组合 hash 表就可以选择 分割每一次的单词
 */

 /**
  substr() substring() slice()
  */