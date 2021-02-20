/**
 303 区域和检索 - 数组不可变
 给定一个整数数组 nums, 求出数组从索引i到j（i≤j） 范围内元素的总和，包含i、j 两点

 实现 NumArray 类
  NumArray[int[] nums] 使用数组nums 初始化对象
  int sumRange(int i int j) 返回数组nums 从索引i到j（i≤j） 范围内元素的总和，包含i、j 两点 也就是 sum(nums[i],nums[i+1],...,nums[j])


 示例
 输入:['NumArray','sumRange','sumRange','sumRange'] 
 [[-2,0,3,-5,2,-1],[0,2],[2,5],[0,5]]
 输出
 [null,1,-1,-3]

 */


 /**
  * @param {number[]} nums 
  */


// 时间复杂度O(n) 空间复杂度O(1)
// 方法一
// class NumArray{
//   constructor(nums){
//     this.data = nums;
//   }

//   sumRange(i,j){
//     let sum = 0;
//     for(let k= i;k<=j;k++){
//       sum+= this.data[k]
//     }
//     return sum;
//   }
// }


// 方法二
// class NumArray {
//   constructor(nums) {
//     this.hashMap ={}
//     for(let i =0;i<nums.length;i++){
//       let sum = 0;
//       for(let j =i;j<nums.length;j++){
//         sum += nums[j];
//         this.hashMap[`${i},${j}`] = sum
//       }
//     }
//   }

//   sumRange(i, j) {
//     return this.hashMap[`${i},${j}`]
//   }
// }


// 方法三
class NumArray {
  constructor(nums) {
    this.sum =[0]; // sum[0] = 0  sum[1] = sum[0]+nums[0]
    for(let i = 0;i<nums.length;i++){
      this.sum[i + 1] = this.sum[i] + nums[i];
    }
  }

  sumRange(i, j) {
    if (i === 0) return this.sum[j + 1]
    return this.sum[j+1]- this.sum[i];
  }
}

// [0,2]

const nums = [-2, 0, 3, -5, 2, -1];   
const numArray = new NumArray(nums);
console.log(numArray.sumRange(0, 2));
console.log(numArray.sumRange(2, 5));
console.log(numArray.sumRange(0, 5));


