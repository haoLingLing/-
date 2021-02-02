/**
 232 用栈实现队列
 请你仅使用两个栈实现先入先出队列，队列应当支持一般队列的所有操作(push、pop、peek、empty)
 实现 MyQueue 类

  push 将元素x 推到队列的末尾
  pop  从队列的开头并返回元素
  peek 返回队列开头的元素
  empty 如果队列为空 返回true 否则返回false

  实现每个操作均摊时间复杂度为O(1)
 */


 // 栈的操作是先入后出  队列是先入先出 两个栈实现队列
 class MyQueue{
   constructor(){
     this.stackA = [];
     this.stackB=[];
   }

  push=(x)=>{
    this.stackA.push(x);
  }

  pop=()=>{
    if (this.stackB.length === 0){
      while(this.stackA.length){
        this.stackB.push((this.stackA.pop()))
     }
    }
    return this.stackB.pop();
  }


  // 获取队首元素
  peek=()=>{
    if (this.stackB.length === 0) {
      while(this.stackA.length){
        this.stackB.push((this.stackA.pop()))
      }
    }
    return this.stackB[this.stackB.length-1]

  }

  // 判断元素是否为空
  empty=()=>{
    return this.stackA.length + this.stackB.length ===0
  }

 }


const myQueue = new MyQueue();
myQueue.push(1); 
myQueue.push(2); 
console.log(myQueue.peek());
console.log(myQueue.pop());
console.log(myQueue.empty())