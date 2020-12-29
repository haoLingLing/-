/**
  给定一个包含n个整数的数组nums 和一个目标值 target， 判断nums中是否存在4个元素，a,b,c,d 使得 a+b+c+d 的值与target 相等？找出所有满足条件且不重复的四元组

  注意： 
  答案中不可以包含重复的四元组
  示例
  给定数组 nums = [1, 0, -1, 0, -2, 2]，和 target = 0。
  满足要求的四元组集合为：
  [
    [1 0 -1 0],
    [1 -1 -2 2],
    [0,0 -2 2]
  ]

 */

 /**
  * 
  * @param {*} nums 
  * @param {*} target 
  * @retrun {number[][]}
  */


  
//  1 排序 去除重复数据
//  2 双指针

 const fourSum=(nums,target)=>{
   nums.sort((a,b)=> a - b);
   const len = nums.length;
   let targetArr=[];
   if (len < 4) return targetArr;

   for (let i = 0; i < len-3;i++ ){
     if (i > 0 && nums[i] === nums[i - 1]) {
       continue;
     }
     if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) {
       break;
     }

     if (nums[i] + nums[len-3] + nums[len-2] + nums[len-1] < target) {
       continue;
     }

     for(let j=i+1;j<len -2 ;j++){
       if (j > i+1 && nums[j] === nums[j - 1]) {
         continue;
       }
       let m = j+1, k = len-1;
       while (m < k){
         let sum  = nums[i]+nums[j]+nums[m]+nums[k];
         if (sum === target ){
           targetArr.push([nums[i], nums[j], nums[m], nums[k]]);
           while(m<k && nums[m] === nums[m+1]) m++;
           while(m<k && nums[k] === nums[k-1]) k--;
           m++;
           k--;
         } else if (sum < target){
           m++;
         }else{
           k--;
         }
       }
     }
   }

   return targetArr;
 }

var fourSum1 = function (nums, target) {
  const quadruplets = [];
  if (nums.length < 4) {
    return quadruplets;
  }
  nums.sort((x, y) => x - y);
  const length = nums.length;
  for (let i = 0; i < length - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) {
      break;
    }
    if (nums[i] + nums[length - 3] + nums[length - 2] + nums[length - 1] < target) {
      continue;
    }
    for (let j = i + 1; j < length - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue;
      }
      if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) {
        break;
      }
      if (nums[i] + nums[j] + nums[length - 2] + nums[length - 1] < target) {
        continue;
      }
      let left = j + 1, right = length - 1;
      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];
        if (sum === target) {
          quadruplets.push([nums[i], nums[j], nums[left], nums[right]]);
          while (left < right && nums[left] === nums[left + 1]) {
            left++;
          }
          left++;
          while (left < right && nums[right] === nums[right - 1]) {
            right--;
          }
          right--;
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }
  return quadruplets;
};



const nums = [-2, -1, -1, 1, 1, 2, 2],target =0;
console.log(fourSum(nums, target))