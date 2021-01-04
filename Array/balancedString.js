/**
 * 1234 替换子串得到平衡字符串
 * 有一个只含有 "Q" "W" "E" "R" 四种字符，且长度为n的字符串
 * 假如该字符串中，这四个字符恰好出现 n/4 次 ，那么它就是一个平衡字符串
 * 
 * 
 * 给你一个这样的字符串s,请通过[替换一个子串]的方式，是原字符串s 变成一个[平衡字符串]
 * 你可以用和[待替换子串] 长度相同的任何其他字符串来完成替换
 * 请返回待替换子串的最小可能长度
 * 如果原字符串自身就是一个平衡字符串 则返回0 
 * 示例 1：

  输入：s = "QWER"
  输出：0
  解释：s 已经是平衡的了。
  示例 2：

  输入：s = "QQWE"
  输出：1
  解释：我们需要把一个 'Q' 替换成 'R'，这样得到的 "RQWE" (或 "QRWE") 是平衡的。
  示例 3：

  输入：s = "QQQW"
  输出：2
  解释：我们可以把前面的 "QQ" 替换成 "ER"。
  示例 4：

  输入：s = "QQQQ"
  输出：3
  解释：我们可以替换后 3 个 'Q'，使 s = "QWER"。

 */


/**
 思考：需要找到替换的数据 
 然后需要去找最小替换的子串 n的字符串  n/4 
 桶排序 
 返回的是 替换子串的最少长度
 */

/*
因为少的字符必定是从多的字符修改过来的，那么我们只需要找到多出来的字符所构成的最短的子串即可
比如 "WQWRQQQW"
W 有 3 个，那么多出 1 个
Q 有 4 个，那么多出 2 个
多出的这几个都需要修改成 E 和 R
我们只需要找到包含 1 个 W 和 2 个 Q 的最短子串即可
*/
  
/**
* @param {string} s
* @return {number}
*/


var balancedString = function (s) {
  let haspMap = { Q: 0, W: 0, E: 0, R: 0 };
  let cur = { Q: 0, W: 0, E: 0, R: 0 };
  for (let char of s) {
    haspMap[char]++;
  }
  let avg = s.length / 4;
  let left = 0;
  let right = -1;
  let res = Infinity;
  while (right < s.length) {
    debugger;
    if (haspMap.Q - cur.Q <= avg && haspMap.W - cur.W <= avg && haspMap.E - cur.E <= avg && haspMap.R - cur.R <= avg) {
      res = Math.min(right - left + 1, res);
      if (left < right) {
        /// 移动左边的字符串
        --cur[s[left++]]
      } else {
        // left > right  说明指针方向发生变化 已经找到了所需的字符串
        return res;
      }
    } else {
      // 如果不满足这个条件 说明字符串是需要的
      ++cur[s[++right]]
    }
  }
  return res;
}


const balancedString1 = funtcion(s){

}

const s = "QWEWEWRE";
console.log(balancedString(s))


/**
 总结 找到最小的操作方法  即找到某个区间的字符串
 根据滑动窗口的变化 缩小所照的返回
  
 */