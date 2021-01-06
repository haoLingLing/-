/**
 搜索旋转排序数组II
 假设按照升序排序的数组在预先未知的某个点上进行了旋转
 例如：数组[0,0,1,2,2,5,6] 可能变为[2,5,6,0,0,1,2]
 编写一个函数来判断给定目标值是否存在于数组中，如果存在，则返回true，否则返回false
 示例1 
 输入: nums = [2,5,6,0,0,1,2], target = 0
 输出: true

  示例 2:
  输入: nums = [2,5,6,0,0,1,2], target = 3
  输出: false

  注意： nums 中可能出现重复的数据
 */

/**
 审题
 升序数组 但是进行了旋转 说明在部分区间内是有顺序的
 需要找的是是否存在某一个值，如果正常来说直接采用二分法就可以求出来
 但是不是递增的，旋转之后是在部分递增
 并且nums 中可能存在重复的数据 需要注意 
 */

/**
 * 
 * @param {*} nums 
 * @param {*} target
 * @return {boolean} 
 */

const search = (nums, target) => {
  const length = nums.length;
  // 特殊情况的处理
  if (length === 0) {
    return false
  }
  let left = 0, right = length;
  while (left < right) {
    debugger;
    // 向下取整
    const mid = left + right >>> 1;
    // 正好等于 则直接return
    if (nums[mid] === target) {
      return true
    } 
    // 先判断有可能从哪里旋转的 
    if(nums[left]<nums[mid]){
      if(nums[left]<=target && target<nums[mid]){
        // 有可能出现递增区间
        right = mid
      }else{
        left = mid+1
      }

    } else if (nums[left] == nums[mid]){
      // 因为有重复的数据，所以不好判断是在哪里旋转的
      left++
    }else{
     if(nums[mid]<target && target <= nums[right-1]){
       left = mid+1
     }else{
       right = mid;
     }
    }
  }
  return false

}

// const nums = [2, 5, 6, 0, 0, 1, 2], target = 0;
// const nums = [0,], target = 1;
  // const nums1 = [1, 1, 1, 0, 1], target1 = 0;
// const nums = [1, 3],target = 1;
// const nums = [3,1],target = 3;
const nums = [5,1,3],target = 3;
console.log(search(nums,target))

// 总结需要注意的是下取整，所以在过程中需要注意的是 right = mid 否则会造成两侧的数据取不到 
// 还有一个 right= nums.length 所以在过程中如果需要使用nums[right-1] 时应该使用right-1 否则找不到想要的数据
// 带重复数据的需要先去除，，否则找不到起点
