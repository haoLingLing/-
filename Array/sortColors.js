/**
 * 76 颜色分类
 * 给定一个包含红色、白色和蓝色，一共n个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排序
 * 此题中，我们使用整数0、1、2 分别红色、白色、蓝色
 * 
 进阶
    你可以不使用代码库中的排序函数来解决这道题
    你能想出一个仅使用常数空间的一趟扫描算法吗 O(1)


  示例1:
    输入 nums=[2,0,2,1,1,0]
    输出 [0,0,1,1,2,2]

  示例2：
    输入：[2,0,1]
    输出 [0,1,2]

  示例3 
    输入nums=[0]
    输出 [0]

  示例4
    输入 nums=[1]
    输出 [1]

    [1,2,0,1,1,0,0,2,2]
 */

/** 
 思考：
 n 个元素的数组 length为0 原地进行排序 
 红色 白色 蓝色 其实就是将所有的顺序排序所有的数据 按照0、1、2 排序
 其实说白了就是排序
*/

 /**
  * @param {number[]} nums
  * @return {void} Do not retrun anything
  */

// 1 进行桶排序 然后将数据重新添加到数组中去
// concat 返回的的需要一个数组接收  题目要求的是原地进行修改 改变的是原来的数组
const sortColors1=(nums)=>{
  const hashMap ={};
  for(let i=0;i<nums.length;i++){
    hashMap[nums[i]] = (hashMap[nums[i]] || 0) +1;
  }
  let resultArray=[];
  for(let i =0;i<3;i++){
    if (hashMap[i]){
      const tempArray = new Array(hashMap[i]).fill(i);
      resultArray = resultArray.concat(tempArray)
    }
  }
  return  resultArray;
}


const sortColors =(nums)=>{
  // 使用的是双指针 i 记录的是0 的位置 j 记录的是1 的位置 剩下的就是2的位置
  let p0 =0,p1=0;
  for(i=0;i<nums.length;++i){
    if (nums[i] === 1) {
      const temp = nums[p1];
      nums[p1] = nums[i];
      nums[i] = temp;
      p1++;
    } else if (nums[i] === 0){
      const temp = nums[p0];
      nums[p0] = nums[i];
      nums[i] = temp;
      if (p0<p1){
        const temp = nums[p1];
        nums[p1] = nums[i];
        nums[i] = temp;
      }
      p0++;
      p1++;
    }
  }
}


// 快排的思路就是将所有的数据分成两个组 当前数据 大于这个数据的，放在左边 小于这个数据的放在右边 然后一直递归，找到数据
// 增加了两个记录的位置，如果相等，则跳过，加1 ，两边往里面逼近更好知道， 只会递归找到一次
// 先是分解小的问题，其次是将情景的题 转换为类似的数学问题 找出问题所需要的东西



const nums = [2, 0, 2, 1, 1, 0];
sortColors(nums)
console.log('nums', nums)