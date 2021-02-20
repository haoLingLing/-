/**
 218 天际线问题
 城市的天际线是从远处观看该城市中所有建筑物形成的轮廓的外部轮廓，给你所有建筑物的位置和高度，请返回由这些建筑物形成的天际线
 每个建筑物的几何信息由数组buildings 表示，其中三元组buildings[i] =[left,right,height]


 输入
 buildings = [[2,9,10],[3,7,15],[5,12,12],[15,20,20],[19,24,8]]
 输出 [[2,10],[3,15],[7,12],[12,0],[15,0],[20,8],[24,0]]


 输入
 buildings =[[0,2,3],[2,5,3]]
 输出 [[0,3],[5,3]]
 */


const arrSort = (arr) => arr.sort((a, b) => a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]);


const getSkyline =(buildings)=>{
   let res =[],pq=[],pre=null;
   for(let b of buildings){
     pq.push([b[0], -b[2]]); // 左端点
     pq.push([b[1],b[2]]); //右端点
   }

   arrSort(pq); // 按照坐标大小进行排序
   let heights =[0]; // 端点最低为0


   for(let h of pq){
     if(h[1]<0){
       heights.push(-h[1]) // 加入左端点
     }else{
       // 如果已经过了当前的阶段的边界，当前的最高的高度出队列
       heights = heights.filter(e => e !== h[1]) // 删除右端点
     }

     // 获取当前节点的最高点 
     let maxHeight = Math.max(...heights);
     // 找到边界点 控制如果不是边界点 出现拐点的时候，出队列
     if (pre !== maxHeight){
       res.push([h[0], maxHeight]);
       pre = maxHeight;
     }
   }

   return res

}


const buildings = [[2, 9, 10], [3, 7, 15], [5, 12, 12], [15, 20, 20], [19, 24, 8]]

console.log(getSkyline(buildings))


// 总结
/**
 考虑坐标的时候需要考虑三种情况
 1 当两个坐标都是左上角坐标，我们要将高度高的排在前面
 2 当两个都是右上角的坐标，我们要将高度低的排在前面
 3 当两个坐标一个是左上角坐标，一个是右上角坐标，我们需要将左上角坐标排在前面
 */

 // 优先队列 先进先出 根据权重控制出队列的权重