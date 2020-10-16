/**
  给你一个包含n 个整数的数组 nums，判断nums 中是否存在三个元素a,b,c 使的a+b+c=0？ 请你找出所有满足条件且不重复的三元组 
  注意 答案中不可以包含重复的三元组

  示例：

给定数组 nums = [-1, 0, 1, 2, -1, -4]，

满足要求的三元组集合为：
[
  [-1, 0, 1],
  [-1, -1, 2]
]

 */
/**
 * @param {*} nums 
 * @return {number[][]}
 */

 // 可以继续使用hash值 存储[1,1] 
const threeSum = function (nums) {
  const numsSet = {};
  const innerUnique = {};
  for (let i = 0; i < nums.length; i++) {
    if (numsSet[nums[i]]) {
      numsSet[nums[i]].push(i)
    } else {
      numsSet[nums[i]] = [i]
    }
  }
  let targetIndex = [];
  for (let i = 0; i < nums.length - 1; i++) {
    const startNum = nums[i]; // 第一个数字
    for (let j = i + 1; j < nums.length; j++) {
      const secondNum = nums[j]; // 第二个数字
      const threeNumber = -(startNum + secondNum); //  第三个数字
      const indexArr = [];// 第三个数字的index
      const tt = numsSet[threeNumber] || [];
      for (let m = 0; m < tt.length;m++){
        indexArr.push(tt[m])
      }
      const startIndex = indexArr.findIndex(e => e == i);
      startIndex > -1 && indexArr.splice(startIndex, 1);
      const secondIndex = indexArr.findIndex(e => e == j);
      secondIndex > -1 && indexArr.splice(secondIndex, 1);

      if (indexArr.length > 0 && indexArr[0] > j) {
        // 去重 三维数组去重
        const targetArr = [nums[i], nums[j], nums[indexArr[0]]].sort().join();
        if (!innerUnique[targetArr]) {
          innerUnique[targetArr] = true;
          targetIndex.push([nums[i], nums[j], nums[indexArr[0]]])
        }
      }
    }
  }

  return targetIndex;
}


// 排序+双指针
// 不可以包含重复 进行排序直接可以避免重复答案
// 降低复杂度 利用双指针

const twoSum = function (nums,start,end,target,value){
 while(start<end){
  let sum = nums[start]+nums[end];
  if(sum===target){
    let result=[];

  }

 }
}

const threeSum1 =function(nums){
  let result=[];
  const innerNum = nums.sort((a,b)=>a-b);
  let target = 0;
  for (let i = 0; i < innerNum.length-2;i++){
    if (nums[i]>0) break;
    let j=i+1;
    if(i>0 && nums[i] ===nums[i-1]){
      continue;
    }
    let k = innerNum.length-1;
    while(j<k){
      const sum = nums[i]+nums[j]+nums[k];
      console.log(nums[i], nums[j], nums[k])
      if(sum === 0){
        result.push([nums[i], nums[j], nums[k]]);
        while(j<k && nums[j] === nums[j+1]) j++;
        while(j<k && nums[k] === nums[k-1]) k--;
        j++;
        k--;
      }else if(sum<target){
        j++;
      }else if(sum>target){
        k--;
      }
    }
  }
  return result;
}


const nums = [-1, 0, 1, 2, -1, -4];
const nums1 = [0,0,0];
const nums2 = [-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6];
const nums4 = [-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]  // 
 // [[-4,0,4],[-4,1,3],[-3,-1,4],[-3,0,3],[-3,1,2],[-2,-1,3],[-2,0,2],[-1,-1,2],[-1,0,1]]
console.log(threeSum1(nums4))

