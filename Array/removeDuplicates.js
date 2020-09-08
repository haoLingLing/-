/**
 26  删除排序数组中的重复项

  给定一个排序数组，你需要在 原地 删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
  不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。

 */

/**
* @param {number[]} nums
* @return {number}
*/
var removeDuplicates = function (nums) {
  let i=nums.length;
  while(i>0){
    if (nums[i--] == nums[i]){
      nums.splice(i,1)
    }
  }
  return nums.length;
};

// 以下的错误，原因是需要改变原数组
// var removeDuplicates = function (nums) {
//   let i = nums.length,j=0;
//   while (i > 0) {
//     if (nums[i--] != nums[i]) {
//       j++;
//     }
//   }
//   return j;
// };


/**
 原理：放置两个数组，一个是快指针，一个是慢指针，而j是快指针，如果 nums[j]=nums[i] 增加j跳过重复项
 如果 nums[j] !=nums[i] 必须把nums[j]的值复制给nums[i],然后递增i
 */

var removeDuplicates = function (nums) {
  if (nums.length==0) return 0;
  let i=0;
  for(let j=0;j<nums.length;j++){
    if(nums[j]!==nums[i]){
      i++;
      nums[i]=nums[j];
    }
  }
  return i+1;
};

var removeDuplicates = function (nums) {
  if (nums.length == 0) return 0;
  let i = 0,j=0;
  while(j<nums.length){
    if (nums[j++] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};




const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4,];
console.time();
console.log(removeDuplicates(nums));
console.timeEnd()


/**
  80   删除排序数组中的重复项II 
  给定一个排序数组，你需要在原地删选出重复出现的元素，是得每个元素最多出现两次，返回移除后数组的长度，
  不需要使用额外的数组空间，你必须在原地修改输入数组并使用O(1)额外空间的条件下完成

  给定 nums = [1,1,1,2,2,3],
  函数应返回新长度 length = 5, 并且原数组的前五个元素被修改为 1, 1, 2, 2, 3 。
  你不需要考虑数组中超出新长度后面的元素。
 */

// nums[j]===nums[i] 跳过增加1
// var removeDuplicates = function (nums) {
//   if (nums.length < 2) return nums.length;
//   let i=2;
//   for(let j=2;j<nums.length;j++){
//     if (nums[j] !== nums[i-2]){
//       nums[i++]=nums[j];
//     }
//   }
//   return i;
// };


// const removeDuplicates=function(nums){
//   let i=0,count=0,length=nums.length;
//   for (let j = 0; j < length;j++){
//     if(nums[j]!==nums[i]){
//       nums[i++]=nums[j];
//       count=0;
//     } else if (nums[j]==nums[i]){
//       if (count<2){
//         nums[i++] = nums[j];
//         count++;
//       }else{
//         count = 0;
//       }
//     }
//   }
//   console.log(nums)
//   return i;
// }

const removeDuplicates = function (nums){
 const length = nums.length;
 let index=0
 for(let i=0;i<length;i++){
   if(i>0 && i<length-1 && nums[i] ==nums[i-1] && nums[i] === nums[i+1]){
     continue;
   } 
   nums[index++] = nums[i]
 }
 return index;
}


const nums = [1,2,2];
console.log(removeDuplicates(nums));
