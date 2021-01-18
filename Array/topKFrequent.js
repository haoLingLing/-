/**
 * 前K个高频元素
 * 给定一个非空的整数数组，返回其中出现频率前 k 高的元素。
 * 示例1
 * 输入 nums=[1,1,1,2,2,3] k=2
 * 输出 [1,2]
 * 
 * 示例2
 * 输入 nums=[1] k=1;
 * 输出 1
 */

/**
 * 思路：找出前k个高频元素 
 * 首先需要的是 统计元素的个数 然后找出前k个大的数据
 * hash 统计数据 
 * 非空的整数数组 保证了数组不会为空
 */

//  const topKFrequent =(nums,k)=>{
//     let hash ={};
//     const length = nums.length;
//     for(let i = 0;i<length;i++){
//       hash[nums[i]] = (hash[nums[i]] || 0) +1
//     }
//    const sortArr=[];
//     // 统计完数据之后 考虑如何排序 
//    for (let length in hash){
//      sortArr.push({key:sortArr});
//    }


//   // 排序 获取到最终的所需要的数组
//    for (let j = k;j<sortArr.length;j++){
//       const num = sortArr[j];
//       for(let m=k-1;m>0;m--){
//         if (num <= sortArr[m]){
//           sortArr[j] = sortArr[m];
//           break;
//         }
//       }
//    }

//    let resultArr=[];
//    for (let i = 0; i < k;i++){
//      for(let length in hash){
//        if(sortArr[i] === hash[+length]){
//          resultArr.push(+length);
//          hash[length] =null;
//          break;
//        }
//      }
//      // 需要找到对应的节点，现在只是知道了频次最高的k个是什么
//    }

//    return resultArr;
  
//  }

var topKFrequent = function (nums, k) {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1)
  }
  // 去除一次重复的数据 由于题目保证了答案的唯一性 所以不会出现答案不一致
  let arr = []
  // 最终出现的结果是 [[4,3,1],[2,-1]]  下标出现的数据则是 出现的次数
  for (let [key, value] of map.entries()) {
    // 如果都出现相同的次数 则继续添加
    if (arr[value]) {
      arr[value].push(key)
    } else {
      arr[value] = [key]
    }
  }
  const res = []
  let i = 0, j = arr.length - 1;
  // 桶排序
  while (i < k) {
    // 从最大的开始找起
    if (arr[j]) {
      let tempLen = arr[j].length
      let n = 0;
      // 遍历 循环找到最大的
      while (n < tempLen) {
        res.push(arr[j][n])
        i++
        n++
      }
    }
    j--
  }
  return res
};


// const nums = [1, 1, 1, 2, 2, 3], k = 2;
// const nums=[1],k=2;
// const nums=[-1,-1],k=1;
const nums = [4, 1, -1, 2, -1, 2, 3],k=2;
const nums = [3, 2, 1, 5, 6, 4]
console.log(topKFrequent(nums,k))