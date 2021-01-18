/**
  215 数组中的第K个最大元素
  在未排序饿数组中找到第k个最大的元素，而不是第K个不同的元素
  示例1
  输入:[3,2,1,5,6,4] k=2;
  输出 5

  输入[3,2,3,1,2,4,5,5,6] k=4；
  输出 4

  假设k总是有效的，且1<=k<= 数组的长度
 */
// 快排的思想
function quickSort(nums, l, r) {
  // 终止条件
  if (l >= r) {
    return;
  }
  // 返回 pivotIndex
  let pos = randomized_partition(nums, l, r);
  // 将相同的逻辑递归地用于左右子数组
  quickSort(nums, l, pos - 1);
  quickSort(nums, pos + 1, r);
}
// 随机获取一个主元  获取其他的定义主元的方式都是可以的
const randomized_partition = (nums,l,r) => {
  let random = Math.random() * (r - l + 1) + 1;
  swap(nums[r], nums[random]);
  return partition(nums, l, r)
}
// 交换数组
const swap = (nums, i, j) => {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

// l:left  r:right
// const partition = (nums, l, r) => {
//   const pivot = nums[r];
//   let i = l - 1; // 将这个定义到前一个的原因，如果+1 的元素>pivot 直接交换 否则没有办法交换
//   for (let j = l; j < r; j++) {
//     if (nums[j] <= pivot) {
//       i = i + 1;
//       swap(nums, i, j);
//     }
//   }
//   // 交换当前的元素
//   swap(nums,i+1, r);
//   return i + 1;
// }

const partition = (nums, l, r) => {
  const pivot = nums[r];
  let i = l, j = r;
  while (i < j) {
    while (i < j && nums[i] <= pivot) {
      i++;
    }
    while (i < j && nums[i] >= pivot) {
      j--;
    }
    while(i==j){
      break;
    }
    swap(nums, i, j);
  }
  swap(nums, i, r);
  return i
}


 const findKthLarget =(nums,k)=>{
   quickSort(nums,0,nums.length-1);
   console.log(nums)
   return nums[nums.length-k];
 }


 

const nums = [3, 2, 1, 5, 6, 4], k = 2;
console.log(findKthLarget(nums,k))

// 快排 堆排

// const findKthLargest=(nums,k)=>{
//   return quickSelect(nums,0,nums.length-1,nums.length-k) 
// }

// const quickSelect = (a,l,r,index)=>{
//   const q = randomPartition(a,l,r);
//   if(q===index){
//     return a[q];
//   }else{
//     q < index ? quickSelect(a, q + 1, r, index) : quickSelect(a.l,q-1,index)
//   }

// }

// const randomPartition=(a,l,r)=>{
//   const x = a[r],i=i-1;
//   for(let j= l;j<r;++j){
//     if(a[j]<=x){
//       swap(a,++i,j)
//     }
//   }
//   swap(a, i+1, r)
//   return i+1;
// }

// // 交换元素 
// const swap=(a,i,j)=>{
//   const temp = a[i];
//   a[i] = a[j];
//   a[j] = temp;
// }