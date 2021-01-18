/**
 * 排序 默认都是整数进行排序
 */


/**
 * 
 * @param {*} nums 
 * @return {nums}
 */
// 冒泡排序
// 冒泡排序的原理 将所有的数据逐次进行对比 
const bubbleSort = (nums) => {
  const length = nums.length;
  for (let i = 0; i < length-1; i++) {
    for (let j = 0; j < length-1; j++) {
      if (nums[j] > nums[j+1]) {
        const temp = nums[j];
        nums[j] = nums[j+1];
        nums[j+1] = temp
      }
    }
  }
  return nums;
}

// 时间复杂度  O(n^2)
// 冒泡排序可以进行什么优化


const nums = [11, 3, 4, 8, 5, 6, 10];

console.log('bubbleSort', bubbleSort(nums))


 // 快排 双向扫描
const partition =(arr,left,right)=>{
  debugger;
  const pivot = arr[left];
  let i = left ,j=right;
  while(i<j){
    //向右遍历扫描
    while (i <= j && arr[i] <= pivot){
      i++;
    }
     //向左遍历扫描
    while (i <= j && arr[j] >= pivot){
      j--;
    }
    if(i>=j){
      break;
    }

    //交换 左边和右边的进行交换
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  //把arr[j]和主元交换
  arr[left] = arr[j];
  arr[j] = pivot;
  return j;
}

function quickSort(arr, start, end) {
  // 终止条件
  if (start >= end) {
    return;
  }

  // 返回 pivotIndex
  let index = partition(arr, start, end);
  // 将相同的逻辑递归地用于左右子数组
  quickSort(arr, start, index - 1);
  quickSort(arr, index + 1, end);
}



quickSort(nums, 0, nums.length - 1)
console.log(nums)



// 排序




// 快排
// 希尔排序
// 堆排序
// 桶排序
// 插入排序
