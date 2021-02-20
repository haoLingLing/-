/**
 哈希
 697 数组的度
 给定一个非空且只包含非负数的整数数组nums,数组的度的定义是指数组里任一元素出现频数的最大值
 你的任务是找到与nums 拥有相同大小的度的最短连续子数组，返回其长度

 示例1 
 输入[1,2,2,3,1]
 输出 2
  */


// 1 找到频数最大的数  
// 2 找到最大数的最小子数组 


const findShortestSubArray=(nums)=>{
  let map = new Map(),size =1,distance = nums.length;

  for(let n of nums){
    map.set(n, map.has(n)? map.get(n)+1:1);
    size = Math,max(size,map.get(n));
  }

  for(let i =0;i<nums.length;i++){
    let cur = nums[i];

    h.set(cur,h.has(cur)?h.get(cur)+1:1);
    if(h.get(cur) ==size){
      let start = nums.indexOf(cur);
      distance = Math.min(distance,i-start+1);
    }
  }
  return distance;
}


const nums = [1, 2, 2, 3, 1];
console.log(findShortestSubArray(nums))