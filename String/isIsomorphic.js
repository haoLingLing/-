/**
  205 同构字符串
  给定两个字符串s和t 判断它们是否是同构的
  如果s中的字符可以按某种映射得到t, 那么这两个字符串是同构的

  每个出现的字符都应当映射到另一个字符，同时不改变字符的顺序，不同的字符不能映射到同一个字符上，相同字符只能映射到同一个字符上，字符可以映射到自己本身

  输入 s='egg',t='add'
  输出 true

  输入 s='foo' t='bar'
  输出 false

  输入 s='paper' t='title'
  输出 true

  提示 s和t的长度相同
  */


// 思考 
// 123321  123321 两者分别对应的上 如果是用hashMap 存储数据 key-> value 同构代表着双向的
const isIsomorphic =(s,t)=>{
  debugger;
  let sMap={},tMap={};
  for(let i=0;i<s.length;i++){
    let x= s[i], y=t[i]
    if ((sMap[x] && sMap[x] !== y) || (tMap[y] && tMap[y] !==x)){
      return false
    }
    sMap[x] = y;
    tMap[y] = x;
  }
  return true
}

const s='foo',t='bar';
console.log(isIsomorphic(s,t))