/**
找到所有数字中消失的数字
给定一个范围 1<=a[i]<=n (n= 数组大小) 的整型数组，数组中的元素一些出现了两次，另一些只出现一次
找出所有在[1,n] 范围内之内没有出现在数组中的数字
你能在不使用额外空间时间复杂度O(n)的情况下完成这个任务，假定返回的数据不算在额外空间内

输入
[4,3,2,7,8,2,3,1]
输出
[5,6]
 */


 // hashMap  空间复杂度O(n) 时间复杂度O(2n)
const findDisappearedNumbers1=function(nums){
    let hashMap={};
    let result =[];
    for(let i = 0;i<nums.length;i++){
       if (!hashMap[nums[i]]){
          hashMap[nums[i]]= true
       }
    }
    for(let j =1;j<nums.length+1;j++){
       if (!hashMap[j]){
          result.push(j)
       }
    }
    return result;
 }


const findDisappearedNumbers = function (nums) {
   let result=[];
   for(let i =0;i<nums.length;i++){
      const index = Math.abs(nums[i])-1;
      if(nums[index]>0){
         nums[index]*=-1;
      }
   }
   for(let i=1;i<nums.length+1;i++){
      if(nums[i-1]>0){
         result.push(i)
      }
   }

   return result;
}



const nums = [4, 3, 2, 7, 8, 2, 3, 1];
const nums=[1,1];
console.log(findDisappearedNumbers(nums))





 // hashMap 遍历一遍数组，只要在数组出现的元素 1:true 


 // 取巧计算
 // 查看某一个数字不在，本身数组下标也是一个数组，这样就是进行标记，标记任何数据 开始循环之后，*-1 也是计算了一种位置，通过其他方式，在遍历到这个的位置的时候，还可以找到 这样的话 *-1 或者减 n 
