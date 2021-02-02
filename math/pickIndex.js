/**
 528 按权重随机选择
 给定一个正整数数组 w,其中 w[i] 代表下标 i 的权重 下标从 0 开始，请写一个函数 pickIndex ，它可以随机地获取下标i，选取下标 i与概率 w[i] 成正比

 例如 对于 w=[1,3] 挑选下标 0 的概率为 1/(1+3) = 0.25 即 25% 而选取下标1的概率为 3/(1+3) = 0.75 

 也就是说 选取下标i 的概率为 w[i]/sum(w)

 输入
 ['Solution','pickIndex']
 [[1],[]]

 输出
 [null,0]
  解释
  Solution solution = new Solution([1])
  solution.pickIndex() // 返回0 因为数组中只有一个元素，所以唯一的选择就是

 */

class Solution{
  constructor(nums){
    this.nums = nums;
    this.total = this.nums.reduce((acc,num)=>acc+num,0);
    console.log(this.total)
  }

  pickIndex=()=>{
    // 随机获取到0-1 的数据 因为概率出现的数据 为[0,1]
    let random = Math.random();
    let lower=0;
    for(let i =0;i<this.nums.length;i++){
      let upper = lower + this.nums[i] / this.total;
      if (lower <= random && random < upper){
        return i
      }
      lower = upper;
    }
  }
}

const solution = new Solution([1,2,3,4])
console.log(solution.pickIndex())
console.log(solution.pickIndex())
console.log(solution.pickIndex())
console.log(solution.pickIndex())

var Solution = function (w) {
  this.w = w;
  this.total = 0;
  this.list = [];
  w.map((item) => {
    this.total += item;
    this.list.push(this.total);
  });
};

Solution.prototype.pickIndex = function () {
  const target = Math.floor(Math.random() * (this.total));
  let lo = 0, hi = this.list.length - 1;
  let mid = 0;
  while (lo <= hi) {
    mid = (lo + hi) >> 1;
    if (this.list[mid] === target) {
      return mid + 1;
    } else if (this.list[mid] > target) {
      hi = --mid;
    } else if (this.list[mid] < target) {
      lo = ++mid;
    }
  }

  if (target >= this.list[lo]) {
    return ++lo;
  } else if (target < this.list[lo]) {
    return lo;
  }
}


// 总结
/**
  增加权重的问题 所有的权重计算在一起所有的数据为1 
  也就是在一块空白地扫粒子得到最后的结果

  在这道题中可以看作是 线段的比列 真实使用场景
  随机权重的问题  随机抽奖 然后有可以根据客户端自己自定义这些概率 权重高的可以被选中
  或者是客户端的负载均衡
 
  或者是使用hashMap 存储key为[0,1] 0  或者是使用二分法  
  最开始的需要将数据获取成 total 相加

  抽奖概率
 */