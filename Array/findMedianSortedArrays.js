/**
 4 寻找两个正序数组的中位数
 类似题目 给定两个已经排序好的数组，找到两者元素中第K大的元素

 给定两个大小为m和n的正序(从小到大)数组 nums1 和 nums2
 请你找出这两个正序数组的中位数，并且要求算法的时间复杂度 O(log(m + n)) 
 你可以假设 nums1 和 nums2 不会同时为空。

示例 1:
nums1 = [1, 3]
nums2 = [2]
则中位数是 2.0

示例 2:
nums1 = [1, 2]
nums2 = [3, 4]
则中位数是 (2 + 3)/2 = 2.5
 */

// 归并排序

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

 /**
  方法一： 使用归并排序的方式，合并两个数组，得到一个大的有序数组，中间的位置的元素，即为中位数
  时间复杂度O(m+n)
  空间复杂度O(m+n)
*/

// var findMedianSortedArrays = function (nums1, nums2) {
//   let len1 = nums1.length-1;
//   let len2 =nums2.length-1;
//   let len =len1+len2+1;
//   while(len2>=0){
//     nums1[len--] = nums1[len1] > nums2[len2] ? nums1[len1--] : nums2[len2--]
//   };
//   const median = ~~((nums1.length-1)/2);
//   const medianNumer = nums1.length % 2 === 0 && (nums1[median] + nums1[median + 1]) / 2 || nums1[median];
//   return medianNumer;
// };


/**
 方法二：仅仅需要K大的元素，不需要排序这么昂贵的操作，可以使用一个计数器，记录当前已经找到的第m大的元素。同时使用两个指针pA和pB,分别指向A和B数组的第一个元素，使用类似merge sort 的原理，如果数组A当前元素小，那么pA++，同时m++；如果数组B当前元素小，那么pB++。m++，最终当m等于K
 时间复杂度O(m+n)
 空间复杂度O(1)
*/
var findMedianSortedArrays = function (nums1, nums2) {
  debugger;
  let pA=0, pB=0,m=0,num=null;
  const allNumsLength = nums1.length + nums2.length;
  let k = ~~(allNumsLength /2);
  while (m<=k){
    if (nums1[pA] < nums2[pB] ){
      num = nums1[pA]
      pA++;
    }else{
      num = nums1[pB];
      pB++;
    }
    m++;
  }
  console.log(num)
};

const nums1=[1,2],nums2=[3];
console.log(findMedianSortedArrays(nums1, nums2));


