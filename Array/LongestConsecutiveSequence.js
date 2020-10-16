/**
 给定一个未排序的整数数组，找出最长连续序列的长度。
 求时间复杂度为O(n)

 示列
 输入 [100, 4, 200, 1, 3, 2]
 输出  4
 解释 最长连续序列[1,2,3,4] 它的长度为4
 */

/**
 * @param {*} nums 
 * @return {number}
 * 时间复杂度O(N)  空间复杂度O(N) 存储hash表
 */
// const longestConsecutive=function(nums:number[]):number{
//   let num_set:Set<number> = new Set();
//   for(const num of nums){
//     num_set.add(num);
//   }
  
//   let longestStreak =0;
//   for( const num of num_set){
//     if(!num_set.has(num-1)){
//       let currentNum = num;
//       let currentStreak =1;
//       while (num_set.has(currentNum + 1)){
//          currentNum +=1;
//         currentStreak += 1;
//       }
//       longestStreak = Math.max(longestStreak, currentStreak)

//     }
//   }

//   return longestStreak;
// }

const longestConsecutive = function (nums){
  const num_set =new Set;
  for(let i=0;i<nums.length;i++){
    num_set.add(nums[i])
  }

  let longestStreak=0;
  for (const num of num_set){
    if (!num_set.has(num-1)){
      let currentNum = num ;
      let currentStreak =1;
      while (num_set.has(currentNum + 1)){
        currentNum+=1;
        currentStreak+=1;
      }

      longestStreak = Math.max(longestStreak, currentStreak)
    }
  }
  return longestStreak;
}


const numArr = [100, 4, 200, 1, 3, 2];

console.log(longestConsecutive(numArr))
