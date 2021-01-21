/**
 318 最大单词的乘积
 给定一个字符串数组 words 找到length(word[i]*word[j]) 的最大值，并且这两个单词不含邮公共字母，你可以认为每个单词中只包含小写字母，如果不存在这个的两个单词，返回0
 示例 1:
  输入: ["abcw","baz","foo","bar","xtfn","abcdef"]
  输出: 16
  解释: 这两个单词为 "abcw", "xtfn"。
  示例 2:

  输入: ["a","ab","abc","d","cd","bcd","abcd"]
  输出: 4
  解释: 这两个单词为 "ab", "cd"。
  示例 3:

  输入: ["a","aa","aaa","aaaa"]
  输出: 0
  解释: 不存在这样的两个单词。

 */


 /**
  * @param {string[]} words 
  * @return {number}
  */

const maxproduct=(words)=>{
  // 计算差值
  const bitNumber=(chart)=>{
    return (chart.charCodeAt(0) - 'a'.charCodeAt(0));
  }
  const record = words.map(word =>{
    let temp = 0;
    for(let i=0;i<word.length;i++){
      temp |= 1<<bitNumber(word[i])
    }
    return temp
  })

  let result = 0;
  for (let i = 0; i < record.length;i++){
    for (let j = i + 1; j < record.length;j++){
      if ((record[i] & record[j]) === 0){
        result = Math.max(result, words[i].length * words[j].length)
      }
    }
  }

  return result
}

const words = ["abcw", "baz", "foo", "bar", "xtfn", "abcdef"];
console.log(maxproduct(words));

/**
 总结 26个英文字母相当于26位进制 每一个进制都将表示的是一个字母，如果出现同一个字母 在与操作中都为1
 */