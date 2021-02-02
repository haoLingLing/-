/**
  设计一个支持push、pop、top 操作，并能在常数时间内检索到最小元素的栈

  push   将元素推入到栈中
  pop    将栈顶元素删除
  top    获取栈顶元素
  getMin 返回最小元素
 */

// 需要额外的一个执行栈
class MinStack1 {
  constructor(){
    // super();
    this.stack=[];
    // 存储最小栈元素
    this.minStack = [Infinity];
  }

  // 入栈
  push = (elemnt) => {
    this.stack.push(elemnt);
    this.minStack.push(Math.min(this.minStack[this.minStack.length-1], elemnt));
  }

  // 删除栈顶元素
  pop = () => {
    this.stack.pop();
    this.minStack.pop()
  }

  // 获取栈顶元素 对最小栈元素不操作
  top = () => {
    return this.stack[this.stack.length-1]
  }


  // 获取最小元素
  getMin=()=>{
    return this.minStack[this.stack.length - 1]
  }
}





// 方法二 如果不能使用额外的空间 
class MinStack {
  constructor() {
    // super();
    this.stack = [];
    this.minNum = Infinity;;
  }

  // 入栈
  push = (elemnt) => {
    if (this.stack.length===0){
      this.minNum = elemnt;
      this.stack.push(elemnt - this.minNum);
    }else{
      // 先入栈 然后更新最小值
      this.stack.push(elemnt - this.minNum);
      if (this.minNum > elemnt) {
        this.minNum = elemnt;
      }
    }

  }

  // 删除栈顶元素
  pop = () => {
    if (this.stack.length === 0) return 
    const pop = this.stack.pop();
    // 如果当前值出现负数 说明当前出栈的是最小值
    if (pop<0){
      this.minNum = this.minNum - pop;
    }
  }

  // 获取栈顶元素 对最小栈元素不操作
  top = () => {
    const topNum = this.stack[this.stack.length - 1];
    if (topNum < 0){
      return this.minNum
    }else{
      return topNum + this.minNum
    }
  }


  // 获取最小元素
  getMin = () => {
    return this.minNum
  }
}

const minStack = new MinStack();
minStack.push(2);
minStack.push(0);
minStack.push(3);
minStack.push(0);
console.log(minStack);
console.log(minStack.getMin());
// console.log('minStack', minStack)
minStack.pop();
console.log(minStack.getMin());
minStack.pop();
console.log(minStack.top()); 
console.log(minStack.getMin());
minStack.pop();
console.log(minStack.getMin());


/**
 总结
 栈 操作受限的线性表
    先入后出   
    主要的操作功能是： 入栈、出栈、 获取栈顶元素 

  在js 执行顺序中 变量就是一个栈的存储空间 最先进入的就是最外层的栈，先释放内部的变量，知道执行栈为空


 */
