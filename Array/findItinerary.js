/**
 332 重新安排行程
 给定一个机票的字符串二维数组[from,to] ，子数组中的两个成员分别表示飞机出发和降落的机场地点，对该行程进行重新规划排序，所有这些机票都属于一个从 JFK 肯尼迪国际机场 出发的线程，所有的行程必须从JFK 开始

 提示
 1 若果存在多种有效的行程，请你按自负自然排序返回最小的行程组合，例如，行程['JFK','LGA'] 与['JFK','LGB']  相比就更小，排序更靠前
 2 所有的机场都用三个大写字母表示 机场代码
 3 假定所有机票至少存在一种合理的行程
 4 所有的机票必须都用一次且只能用一次

 示例1 
 输入 [['MUC','LHR'],['JFK','MUC'],['SFO','SJC'],['LHR','SF0']]
 输出 ['JFK','MUC','LHR','SFO','SJC']

 示例2 
 输入 [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
 输出 ["JFK","ATL","JFK","SFO","ATL","SFO"]
 还有其中的一项行程
 ["JFK","SFO","ATL","JFK","ATL","SFO"]

 */


//  ES6
// const findItinerary=(tickes)=>{
//   const hashMap =new Map();
//   for (let i = 0; i < tickes.length;i++){
//     const [from, to] = tickes[i];
//     // 进行比较
//     if (hashMap.has(from)){
//       hashMap.get(from) > to ? hashMap.set(from, [to, ...hashMap.get(from)]) : hashMap.set(from, [...hashMap.get(from),to])
//     }else{
//       hashMap.set(from,[to]);
//     }
//   }
//   let result = []; let start ='JFK';
//   while (tickes.length !== (result.length -1)){
//     let cur = start;
//     result.push(start);
//     if (hashMap.get(start) && hashMap.get(start).length > 0){
//       start =  hashMap.get(start)[0];
//       hashMap.set(cur, hashMap.get(cur).slice(1))
//     }
//   }
//   return result;
// }


const findItinerary=(tickets)=>{
  const res = ['JFK'];
  const map={};

  // for(const ticket of tickets){ // 遍历tickets 建表
  //   const [from, to] = ticket; // 获取起点和终点
  //   if(map[from]){ // 将小的城市 放在首位
  //     map[from] > to ? map[from] = [to, ...map[from]] : map[from] = [...map[from],to]
  //   }else{
  //     map[from] = [to] // 建立映射
  //   }
  // }

  for (const ticket of tickets) { // 遍历tickets，建表
    const [from, to] = ticket;    // 每一张机票，读出起点和终点
    if (!map[from]) {
      map[from] = []; // 初始化
    }
    map[from].push(to); // 建立映射
  }

  for (const city in map) { // 按照字母顺序，小的在前
    map[city].sort();
  }
  const dfs =(city,used)=>{
    if (used === tickets.length){
      return true;
    }
    const nextCities = map[city]; // 获取下一站能去的城市list
    if(!nextCities || nextCities.length===0){ // 没有邻接城市
      return false
    }

    for(let i=0;i<nextCities.length;i++){
      debugger;
      const next = nextCities[i];
      // 删除这个已经去过的城市 
      nextCities.splice(i,1);
      res.push(next);
      // 如果这条路可以走通 则可以
      if(dfs(next,used+1)){
        return true;
      }else{
        // 如果这条路走不通 则需要将这个数据重新添加到到城市中
        nextCities.splice(i,0,next);
        // res 中删除 另一种回溯
        res.pop();
      }
    }
  }

  // dfs('JFK',0); // 从'JFK' 城市开始遍历，当前用掉0张机票
  return res;
}

// const tickes = [['MUC', 'LHR'], ['JFK', 'MUC'], ['SFO', 'SJC'], ['LHR', 'SFO']];
// const tickes = [["JFK", "SFO"], ["JFK", "ATL"], ["SFO", "ATL"], ["ATL", "JFK"], ["ATL", "SFO"]];
const tickes = [["EZE", "TIA"], ["EZE", "AXA"], ["AUA", "EZE"], ["EZE", "JFK"], ["JFK", "ANU"], ["JFK", "ANU"], ["AXA", "TIA"], ["JFK", "AUA"], ["TIA", "JFK"], ["ANU", "EZE"], ["ANU", "EZE"], ["TIA", "AUA"]]
console.log(findItinerary(tickes))


// 总结
// 解决的是解欧拉回路 / 欧拉通路
/*
给定n 个点 mm 条边的图,要求从指定的顶点出发 经过所有的边恰好一次 可以理解起点一笔画的问题 使得路径的字典序最小
通过途中所有的边恰好一次且行遍所有顶点的通路称为欧拉通路。
通过途中所有的边恰好一次且行遍所有顶点的回路称为欧拉回路
具有欧拉回路的无向图称之为欧拉图
具有欧拉通路但不具有欧拉回路的无向图称为半欧拉图。

对于每一个只有入度和出度差为1的节点会导致死胡同


Hierholzer 算法
  用于在连通图中寻找欧拉途径 其流程如下
  1 从起点出发，进行深度优先搜索
  2 每次沿着某条边从某个顶点移动到另一个顶点的时候，都需要删除这条边
  3 如果没有可移动的路径，则将所在的节点加入到栈中，并返回

   需要深度遍历，邻接表
*/