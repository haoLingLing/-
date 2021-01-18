/**
 * 462 最少移动次数使元素相等
 给定一个非空整数数组，找到使所有元素相等的最小移动次数，其中每次移动可将选定的一个元素加一或者减一，假设数组的长度最多为10000

 输入 [1,2,3] 输出 2
 说明，只有两个动作使需要记住的 加1 或者是减 1  [1,2,3] => [2,2,3] [2,2,2]
 */


 // 思考 加一 或者是减一  求平均数
 // [1,3,4,5] 13/4 3 或者是4  [3,3,3,3]  2+0+1+2 = 5 [4,4,4,4] 3+1+1= 5
 // [1,3,4,4] 12/4 3  2+0+2 = 4  3+1=4
 // 所以所求的是中位数
 // 排序 找到中位数 取中间 或者是 向下取整


 // 方法 x为N中的中位数是，可以使得距离最小 如果N为奇数 则为中间数 如果为偶数 则为最小的
 // 时间复杂度 O(NlogN) 空间复杂度O(logN)
 const minMoves21=(nums)=>{
   // 排序
   nums.sort((a,b)=>a-b);
   console.log(nums)
   // 找到中位数
   const media = nums.length % 2 === 0 ? nums.length/2 : nums.length/2>>>0 ;
   let sum = 0;
   for(let i =0;i<nums.length;i++){
     sum += Math.abs(nums[i] - nums[media])
   }
   return sum;
 }


 // 快速选择法 
 // 使用的是快排的思想，只要找到中位数 就可以减少一边的排序，左边有p个元素，右边有q个元素，如果需要找的数据为k个元素，如果k<=p 则不需要对右侧排序
 // 否则需要对左侧元素排序 这样归根结底 就是需要找第k大个元素
 // Array/findKthLargest.js
// 交换数组
const swap = (nums, i, j) => {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

const partition = (nums, l, r) => {
  const pivot = nums[r];
  let i = l - 1; // 将这个定义到前一个的原因，如果+1 的元素>pivot 直接交换 否则没有办法交换
  for (let j = l; j < r; j++) {
    if (nums[j] <= pivot) {
      i = i + 1;
      swap(nums, i, j);
    }
  }
  // 交换当前的元素
  swap(nums,i+1, r);
  return i + 1;
}
// 快排的思想 原本的思想
// function quickSort(nums, l, r) {
//   // 终止条件
//   if (l >= r) {
//     return;
//   }
//   // 返回 pivotIndex
//   let pos = randomized_partition(nums, l, r);
//   // 将相同的逻辑递归地用于左右子数组
//   quickSort(nums, l, pos - 1);
//   quickSort(nums, pos + 1, r);
// }
// 随机获取一个主元  获取其他的定义主元的方式都是可以的
const randomized_partition = (nums, l, r) => {
  let random = Math.random() * (r - l + 1) + 1;
  swap(nums[r], nums[random]);
  return partition(nums, l, r)
}

const select=(nums,l,r,k)=>{
  if(l===r){
    return nums[l]
  }
  let pivotIndex = randomized_partition(nums,l,r);
  if (k === pivotIndex){
    return nums[k]
  } else if (k < pivotIndex){
    return select(nums,l,pivotIndex-1,k)
  }else{
    return select(nums, pivotIndex+1,r, k)
  }
}

const minMoves2=(nums)=>{
  debugger;
  let sum = 0;
  let media = select(nums,0,nums.length-1, nums.length/2 >>>0) 
  for (let i = 0; i < nums.length; i++) {
    sum += Math.abs(nums[i] - media)
  }
  return sum;
}

const nums = [1,3,2];
console.log(minMoves2(nums))