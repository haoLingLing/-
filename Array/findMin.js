/**
 154 寻找旋转排序数组中的最小值
 假设按照升序排序的数组在预先未知的某个点上进行了旋转
 例如 数组[0,1,2,4,5,6,7] 可能变为[4,5,6,7,0,1,2]
 请找出其中最小的元素
 注意数组中可能存在的重复元素

 示例1
 输入[1,3,5] 输出 1
 示例2
 输入[2,2,2,0,1] 输出0

 允许重复出现算法
 */

 /**
  考虑 升序排序 需要找出最小值
  旋转数组 可能出现重复的值

  出现一个左区间和右区间 可能某一个区间存在 递增区间
  */

  const findMin =(nums)=>{
     const length = nums.length;
     if(length===0){
        return null
     }
     let left= 0;right = length-1;
     while(left<right){
       const mid = left +right >>> 1;
       // 如果是相等的，则找不到区间
       if(nums[mid]===nums[left] && mid!==left){
         left++;
         continue;
       }
     
       // 因为函数是一个递增区间 而且旋转数据是将后面大的数据进行旋转 放到左侧
       if(nums[mid]<nums[right]){
         right = mid
       }else if(nums[mid] > nums[right]){
         left = mid+1;
       }else{
         right--;
       }
     }
     return nums[left]
  }

// const nums = [2, 2, 2, 0, 1];
// const nums = [3,5,1];
const nums = [3,1,1];
console.log(findMin(nums))

// 总结
// 旋转数据的时候 前面的数据都是比最后一个数据大 然后前面的数据有可能是递增的数据
// 所以在找到中点的时候，去和最后一个数据作对比，如果比right 数据小，则说明不是从左边旋转之后的数据，则缩小右边的区间 否则缩小左边的区域
// 有很多隐藏的条件 需要注意