/**
 给定一个字符串,请将字符串里字符出现的频率降序排序

 示例1
 输入 tree 输出eetr 或者是eert 都是正确答案
 输入 Aabb  输出bbAa 或者是bbaA  都是正确答案
 */


 /**
  思考 频率降序排序
  hashMap 统计次数
  降序排序 桶排序 所有的都将放入桶中
  
  
  */


 /**
  * @param {string} s 
  * @return {string} s
  */

const frequencySort=(s)=>{
  const hashMap= new Map();
  for(let i=0;i<s.length;i++){
    hashMap.set(s[i],(hashMap.get(s[i]) || 0)+1)
  }

  // 桶排序 
  let bucketArr=[];
  for(let [key,value] of hashMap){
    if (bucketArr[value]){
      bucketArr[value].push(key)
    }else{
      bucketArr[value]=[key]
    }
  }
  debugger;

  let retrunString='';
  for (let i = bucketArr.length-1;i>0;i--){
    let n=0;
    const innerLength = bucketArr[i] && bucketArr[i].length || 0;
    while (n < innerLength){
      retrunString =retrunString.padEnd(i + retrunString.length, bucketArr[i][n] )
      n++;
    }
  }

  return retrunString;
}

// const s ="tree";
const s = "cccaaa";
console.log(frequencySort(s))

// 总计，如果出现频率的数据，需要的是使用hashMap 统计数据  但是这个统计数据除了使用key value 的值之外，还需要考虑的是 桶排序 ，就直接可以进行排序，index 即为知道的出现的次数