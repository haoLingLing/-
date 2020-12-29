/**
 反转字符串中的元音字母 
 
 示例 1：
  输入："hello"
  输出："holle"

 示例 2：
  输入："leetcode"
  输出："leotcede"

  注意 y 不属于元音

 */

// 元音字母 a e i o u  A E I O U

/**
 * 审题
 * 反转 元音字母
 * 反转 从前的 [2 5 7] [7 5 2]
 * [1,2,3,4,5] [5,4,3,2,1]
 * 其实理解清楚之后就是 反转数组，记录数据
 */

/**
 * @param {string} s
 * @return {string}
 */


// 时间复杂度O(n) 空间复杂度O(1)
const reverseVowels = (s) => {
  // 由于字符串不可以直接被修改 所以需要创建两个变量
  let fromtemps = '', totemps = '';
  const vowelArr = new Set('aeiouAEIOU');
  let i = 0, j = s.length - 1;
  while (i < j) {
    if (!vowelArr.has(s[i])) {
      fromtemps += s[i];
      i++;
      continue;
    }
    if (!vowelArr.has(s[j])) {
      totemps = s[j] + totemps;
      j--;
      continue;
    }
    fromtemps += s[j];
    totemps = s[i] + totemps;
    i++;
    j--;
  }
  if (i == j) {
    return fromtemps = fromtemps + s[i] + totemps
  }
  return fromtemps + totemps;
}

const reverseVowels1 = (s) => {
  const vowelArr = new Set('aeiouAEIOU');
  const stringArr = s.split('');
  let i = 0, j = s.length - 1;
  while (i < j) {
    if (!vowelArr.has(s[i])) {
      i++;
      continue;
    }
    if (!vowelArr.has(s[j])) {
      j--;
      continue;
    }
    const temp = stringArr[i];
    stringArr[i++] = stringArr[j];
    stringArr[j--] = temp;
  }

  return stringArr.join('');
}

console.log(reverseVowels1("leetcode"))

/**
 总结：对问题进行分析 
 题目最终分析完成时候 交换数组
 使用左右指针 最为合适 左右指针结束条件为 left<right 
 */