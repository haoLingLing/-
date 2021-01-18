/**
 384 打乱数组
 给你一个整数数组nums,设计算法来打乱一个没有重复元素的数组
 实现 Solution Class 
   - Solution(int[] nums) 使用整数数组nums 初始化对象
   int[] reset()  重设数组到它的初始状态并返回
   int[] shuffle() 返回数组随机打乱之后的结果


  输入
  ['solution','shuffle','reset','shuffle'] // 操作命令
  [[[1,2,3]],[],[],[]]

  输出
  [null,[3,1,2],[1,2,3],[1,32]]

  解释
  Solution solution = new Solution([1, 2, 3]);
  solution.shuffle();    // 打乱数组 [1,2,3] 并返回结果。任何 [1,2,3]的排列返回的概率应该相同。例如，返回 [3, 1, 2]
  solution.reset();      // 重设数组到它的初始状态 [1, 2, 3] 。返回 [1, 2, 3]
  solution.shuffle();    // 随机返回数组 [1, 2, 3] 打乱后的结果。例如，返回 [1, 3, 2]

 */

 // 思考，如何去打乱数据 换一种说法，从n个帽子，随机取出n个球

class Solution{
  constructor(nums){
    this.nums =nums;
    this.cloneNums = [...nums];
  }

  reset=()=>{
    return this.cloneNums;
  }

  // swap=(i,j)=>{
  //   const temp = this.nums[i];
  //   this.nums[i]= this.nums[j];
  //   this.nums[j] = temp;
  // }

  random=(min,max)=>{
    return Math.random()*(max-min)+min >>> 0;
  }
  shuffle=()=>{
    for(let i =0;i<this.nums.length;i++){
      const rand = this.random(i, this.nums.length); 
      [this.nums[i], this.nums[rand]] = [this.nums[rand], this.nums[i]]
    }
    return this.nums
  }

}


const solution = new Solution([1,2,3]);
console.log(solution.shuffle());
console.log(solution.reset());
console.log(solution.shuffle());


// 总结
/**
  上面的算法 可以使用暴力的方式 将所有的数据全排列，然后随机的在这个全排列的结果中选取一个 但是时间复杂度 0(n^n) 空间复杂度 n!
  完全不一致
  
  二：从一个盒子中有n个球，福利彩票的取法 取出n个球，每一个球被取到的概率都为1/n 需要的是一个额外的盒子，然后从盒子中取出一个数据，放入到新的盒子中
  三：洗牌算法
      1到N的数字的随机排列 具体步骤如下：
      写下从1到N的数字
      2 取一个从1到剩下的数字(包括这个数字) 的随机数k
      3 从低位开始，得到k个数字 这个数字还没有取出 把它写在独立的一个列表的最后一位
      4 重复第2步，直到所有的数字都被取出
      5 第三步 写出这个序列，就是原始数字的随机排列
       如果证明第2步取出的数字是真随机的，那么对后得到的排序一定也是
 */