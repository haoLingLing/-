/**
 有序数组中的单一元素
 给定一个只包含整数的有序数组，每个元素都会出现两次，唯有一个数只会出现一次，找出这个数
 示例1
   输入[1,1,2,3,4,4,8,8]
   输出2

  示例2
    输入 [3,3,7,7,10,11,11]
    输出10
 */

/**
 思考 有序数组 出现两次 唯一一个出现一次
 二分法 如果当前mid 为偶数  mid+1 和当前的相等，说明出现一次的在左区间 否则在右区间
 如果当前mid 为奇数   如果mid+1 和当前的相等 说明在右区间 否则在左区间
 */


const singleNonDuplicate = (nums)=>{
  const length = nums.length;
  if(length===0){
    return ""
  }
  if(length ===1){
    return nums[0]
  }

  let left=0,right = length;
  while(left<right){
    const mid = left +right >>> 1;
    if(mid%2===0){
      if (nums[mid] === nums[mid + 1]) {
        left = mid + 1
      } else {
        right = mid;
      }
      
    }else{
      if (nums[mid] === nums[mid + 1]) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
  }

  return nums[left]
}


// 上面的判断是一个方式 利用的奇偶数 [0,0,1,1,2,2,3,3] 0,1,2,3,4,5,6,7  如果mid 正好是奇数，-- 正好是刚开始的数据开始，下一个相同说明只有一个的在右区间 否则是在左区间 减少搜索的区间
const singleNonDuplicate1 =(nums)=>{
  let left = 0;right = nums.length-1;
  while(left<right){
    debugger;
    let mid = left +right >>>1;
    if(mid%2 ===1) mid--;
    if(nums[mid] === nums[mid+1]){
      left= mid+2
    }else{
      right = mid;
    }
  }
  return nums[left]
}

// const nums = [1, 1, 2, 3, 3, 4, 4, 8, 8];
const nums = [3, 3, 7, 7, 10, 11, 11]
console.log(singleNonDuplicate1(nums))

/**
 总结：二分法就是判断需要找的数据，在某一个区间，进行区间缩小，但是需要找的是如果才能确定某一个区间，以及分界线
 */