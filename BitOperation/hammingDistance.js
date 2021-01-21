/**
 两个整数之间的汉明距离是指两个数字对应的二进制位不同的位置的数目
 给出两个整数 x 和 y,计算它们之间的汉明距离

 示例
 输入 x=1 ,y =4;
 输出2 
 解释 1  0001  
     4  0100 
   两个位置不一样
 */

 //  思考 两个数字转换成二进制 然后分别对别数据

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */

const hammingDistance1=(x,y)=>{
  let binaryX = (x).toString(2);
  let binaryY = (y).toString(2);
  const xl = binaryX.length;
  const yl = binaryY.length;
  if(xl<=yl){
    binaryX = binaryX.padStart(yl,0)
  }else{
    binaryY = binaryY.padStart(xl,0)
  }
  let d = 0;
  for (let i = binaryX.length-1; i >=0;i--){
    if ((binaryX[i] !== binaryY[i])){
      d++;
    }
  }
  return d;
}


// 移位的操作
const hammingDistance2 =(x,y)=>{
  let xor = x ^ y;
  let d = 0;
  while(xor!==0){
    // 除余是否为1 如果为1 说明是一致的 
    if(xor % 2==1){
      d+=1;
    }
    xor = xor >> 1;
  }
  return  d;
}


// 和移位法的区别是如果 遇到最右边的1 后，如果可以跳过中间的0，直接跳到下一个1 效率会很高的
const hammingDistance=(x,y)=>{
  let xor = x ^ y;
  let d = 0;
  while (xor !== 0) {
    d+=1;
    xor = xor & (xor-1);
  }
  return d;
}


const x = 1, y = 4;
console.log(hammingDistance(x, y))




/**
  总结：多个领域，在编码理论用于错误检测，在信息论中量化字符串之间的差异
  2 & 3 = 2
  2 | 3 = 3
  2 ^ 3 = 1 异或的算法 0 0 =>0 1 1 =>0 1 0 => 1 
 */ 