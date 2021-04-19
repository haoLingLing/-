/**
请根据每日气温列表，重新生成一个列表，对应位置的输出为：想要观测到更高的气温，至少需要等待的天数，如果气温在这个之后都不会升高，请在该位置用0 来代替
例如：给定一个列表 temperatures=[73,74,75,71,69,72,76,73] 对应的输出应该是 [1,1,4,2,1,1,0,0]

提示:
 气温列表长度的范围是[1,30000] 每个气温的值均在华氏度，都是在[30,100] 范围内的整数
 */

 // 思考 需要记录的是 当前的最大值 以及位置 从后往前记录


/**
 * @param {number[]} T
 * @return {number[]}
 */


 // 暴力解法 双指针 找到比当前元素大的数据就可以 时间复杂度是O(n^2) 最坏的情况 是一个递减的数组 
var dailyTemperatures1 = function (T) {
   let result =[];
   const length = T.length;
   let maxNumber = T[length - 1];
   let lo = length - 1;
   result[T.length-1]=0
   for(let i =T.length-2;i>=0;i--){
     result[i] = 0;
     for (let j = i; j < T.length;j++){
       if (T[i]<T[j]){
         result[i] = j-i;
         break;
       }
     }
   }

  return result;
};


const dailyTemperatures=function(T){
  
}

//  考虑使用栈来做  递减栈
// T[i] > T[stack[stack.length - 1]]  必须有这个条件 否则如果栈中存在一个数据 但是接下来的数据不满足这个条件 就会进入死循环
const dailyTemperatures =(T)=>{
  const result = new Array(T.length).fill(0);
  const stack =[]; // 递减栈
  for(let i =0;i<T.length;i++){
    // 如果栈不为空，说明需要找到一个比它大的数据
    while (stack.length !== 0 && T[i] > T[stack[stack.length - 1]]){
        result[stack[stack.length-1]] = i- stack[stack.length - 1];
        stack.pop(); // 出栈
    }
    stack.push(i); // 栈中存储的数据是位置的数据
  }
  return result
}


const T = [73, 74, 75, 71, 69, 72, 76, 73];
console.log(dailyTemperatures(T))



/**
 总结：递减栈
 找到最大值与这个当前元素的距离
 
 如果仅仅是存储与最大值之间的关系，但是如果需要看临近最大值之间的数据
 
 */