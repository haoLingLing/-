/**
  有效的括号
  给定一个只包括 '(' ')', '{','}','[',']' 的字符串s,  判断字符串是否有效
 */

/**
 * @param {string} s 
 * @return {boolean}
 */

const isValid = (s) =>{
  debugger;
  const length = s.length;
  if (length %2 !==0){
    return false
  }

  const hashMap = {
    ')':'(',
    "]":'[',
    "}":"{"
  }

  // 栈
  const stack =[];
  for (let i = -0; i < length;i++){
    // 如果是后半部分符号
    if (hashMap[s[i]]){
      // 栈不为空  并且栈顶元素和当前的是匹配的 出栈 否则则是不匹配的
      if (stack.length == 0 || stack[stack.length - 1] !== hashMap[s[i]]){
        return false 
      }
      stack.pop()
    }else{
      // 如果是前半部分符号 入栈
      stack.push(s[i])
    }
  }

  // 如果栈内有元素 说明没有匹配完成
  return stack.length === 0;

}

const s='()';

console.log(isValid(s))



// 方法二 尝试使用双指针的方式 无法进行记录 容易丢失位置，并且需要记录的变量较多


// 时间复杂度 O(n)
// 空间复杂度 O(n)+ O(1) hashMap 的复杂度