### 获取二进制位是0 还是1
思路:
做与运算 例如做判断x的第五位的二进制是1还是0，可以与1<<4 做与运算，然后将结果>>4  判断最终的结果是1 还是0 ，如果结果为0 ，则第五位为0 否则为1 
```js
const judje0_1=(x,y)=>{
  const result = x& 1<<(y-1) >>(y-1) ===0?'0':'1'
  console.log(`${x}的第${y} 位的二进制位${result}`)
}
```
做与运算 例如做判断x的第五位的二进制是1还是0，可以将x>>4 结果与1做与运算 判断最终的结果是1 还是0 ，如果结果为0 ，则第五位为0 否则为1
```js
const judje0_1=(x,y)=>{
  const result = x>>(y-1)&1 ===0?'0':'1'
  console.log(`${x}的第${y} 位的二进制位${result}`)
}
``` 

### 交换两个整数变量的值
思路：利用异或的性质实现。对于任何数x，都有x^x =0, x^0 = x， 同自己求异或为0，同0求异或为自己。 自反性：A^B^B = A^0=A,连续喝同一个因子做异或运算，最终结果为自己。如交换A、B的值，有：
- A = A ^ B
- B = A ^ B B = A ^ B ^ B = A
- A = A ^ B

```js
const SwapValue=(a,b)=>{
  console.log(a,b)
  a= a^b;
  b= a^b;
  a= a^b;
  console.log(a,b)
}
```

链接地址 https://cshihong.github.io/2018/12/31/%E4%BD%8D%E8%BF%90%E7%AE%97%E7%9A%84%E5%A5%87%E5%B7%A7%E6%B7%AB%E6%8A%80/