/**
 227 基本计算器
 实现一个基本的计算器来计算一个简单的字符串表达式的值
 字符串表达式仅包含非负整数 + -  * / 四种运算符和空格 整数除法仅保留整数部分

 示例1 
 输入 3+2*2  输出 7 
 输入 3/2 输出1
 输入 3+5/2 输出 5 


 提示：假设所给的表达式都是有效的
 
 */

 /**
  思考：如何将这些东西 + -  * / 分开
  然后加上 优先级 先是乘除 然后是加减
  2*2+3
  */

/**
* @param {string} s
* @return {number}
*/
const calculate =(s)=>{
   let stack =[],n=0,sign='+';
   for(let i=0;i<s.length || n;i++){
     if(s[i]=='') continue;
     if (/\D/.test(s[i])){
       switch (sign){
         case '+': stack.push(n); break;
         case '-': stack.push(-n); break;
         case '*': stack.push(stack.pop()*n); break;
         case '/': stack.push(stack.pop()/n >> 0); break;
       }
       sign=s[i];n='';
     }else{
       n += s[i]
     }
   }

  return stack.reduce((p,v)=>p+(v|0),0)
}

const s = "3/2"
console.log(calculate(s))

/**
 总结
 关于优先级的事件，考虑栈 权重先高的先出

 先将第一个数压入栈中 第一个数肯定是一个+ 然后将第二个数根据根据需求入栈中

 如果碰到优先级比较高的数据，先将前一个数据取出来，然后与当前的数据运算之后，将结果放入栈中
 */

