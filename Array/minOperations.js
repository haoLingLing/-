/**
 1658 将x减到0 的最小操作数
 给你一个整数数组nums 和一个整数m  每一次操作时，你应当移除数组nums 最左边和最右边的元素，然后从x 中减去该元素的值， 请注意，需要修改数组以供接下来的操作使用

 如果可以将x 恰好减到0 返回最小操作数 否则 返回 -1

 示例 1：
  输入：nums = [1,1,4,2,3], x = 5
  输出：2
  解释：最佳解决方案是移除后两个元素，将 x 减到 0 。

  示例 2：
  输入：nums = [5,6,7,8,9], x = 4
  输出：-1

  示例 3：
  输入：nums = [3,2,20,1,1,3], x = 10
  输出：5
  解释：最佳解决方案是移除后三个元素和前两个元素（总共 5 次操作），将 x 减到 0 。

  提示：
    1 <= nums.length <= 105
    1 <= nums[i] <= 104
    1 <= x <= 109
 */

 /***
  思考：
  如果所有的东西相加大于目标数 则返回-1 即找不到目标数返回-1
  需要找到最优解 即操作的最优解
  有可能多种方案 但是需要记录的是最优方案
  
  两数之和 变成n数之和
  两数之和使用的是左右指针的方式  并且两数之和 的那道题 是有排序在的 使用左指针和右指针的方式找到最优解
  n数之和 1 <= nums[i] <= 104 说明是和是递增函数 不会存在负数的问题

  hashMap new Set 记录所有的和 然后需要记录的是每次操作的次数
  前缀和 + 后缀和 + hashMap 记录
   
  */
 /**
  * 
  * @param {Array} nums 
  * @param {number} number 
  * @return {number}
  */

// 需要找的是n个数字最小的和 从左边和右边数据之和  
// 反向求结果 sum -number  使用 hashMap 的方法 记录之前的位置 然后找到匹配的位置
const minOperations = (nums, number) => {
  const sum = nums.reduce((acc, e) => acc + e, 0);
  const targetSum = sum - number;
  const hashMap = new Map();
  // 需要找的区间长度
  let res = -1;
  let length = nums.length;
  // 设置0 的位置为-1 就是在求长度的时候i-0+1 所以直接将0 即所找到的位置设置为 -1 则就会找到需要找到的位置
  hashMap.set(0, -1);
  let acc = 0;
  // 如果所求的数字正好就是sum; 则找到的区间长度为0 
  if (targetSum === 0) {
    res = Math.max(res, 0);
  }
  for (let i = 0; i < length; i++) {
    acc += nums[i];
    // 判断如果是当前累加值
    // 如果another 找到为0  则是所需的，否则就是一个片段 就是所需要找到的位置
    const another = acc - targetSum;
    if (hashMap.get(another) != undefined) {
      res = Math.max(res, i - hashMap.get(another));
    }
    hashMap.set(acc, i)
  }

  return res == -1 ? -1 : length - res;
}

// 找到最长的字段 左右指针的进行修改 将所有的数据进行求和
 const minOperations1 =(nums,number)=>{
   const length = nums.length;
   const sum = nums.reduce((acc, e) => acc + e, 0);
   let currentSum = 0;
   let left=0,right = 0;
   let res = -1;
   // 滑窗的思想，先找到一个区间，记录符合的情况，然后缩小区间 再去找符合区间的做法
   while (left < nums.length){
     // 右指针先行 计算求和  形成一个解的区间 
     if (right < nums.length){
       currentSum += nums[right++]
     }

     // 如果 currentSum 已经大于所求和的区间，需要减少区间内的数字，left指针 左指针发生变化 缩小取值空间 
     while (currentSum > sum - number && left < nums.length) {
       currentSum -= nums[left++];
     }

     // 计算所取的值
     if (currentSum == sum -number){
        res = Math.max(res,right-left)
     }

     // 如果右指针不再变化，只能变化左指针 将所有的数据遍历完成
     if (right === length){
       left++;
     }
   }
   return res == -1 ? -1 : length - res;

 }


const nums = [1, 1, 4, 2, 3], number= 5;
// const nums = [5, 2, 3, 1, 1],number =5;
console.log(minOperations1(nums, number))


/**
 总结：hashMap 是将所有的数据存储在一个对象中，然后找到合适的需要的值
 双指针做法是通过两个指针的变化，找到所需要的数据  
 之前是左右指针 通过判断条件从两端出发
 滑窗的思想是将： 两个指针在同一个方向 先是right 指针放生变化，根据所需要的条件移动，
 需要缩小区间，则移动左指针发生变化
 结束的条件： 找到所需要的结果的 直接return
            或者找最**的区间，需要增加的一个变量 找最小值或者最大值 left == length  return 这个变量
 */