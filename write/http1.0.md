
### 浏览器缓存
    浏览器缓存都是从第二次请求开始的，第一次请求，服务器返回资源，并在response header 中回传资源的缓存策略
  - 强制缓存: 服务其通知浏览器一个缓存时间，在缓存时间内，下次请求，直接使用缓存，不在时间内，直接使用比较缓存，也就是协商缓存
    直接读取本地资源，在netWork中显示的form memory 或者是from disk
    - Cache-Control http1.1
       - 优先级更高
       - 是一个相对时间，用于表达上次请求正确资源之后多少秒内缓存有效
       - max-age<s>: 最大优先时间 秒
       - must-revalidate 如果超过了max-age ，浏览器向服务端请求数据验证缓存是否新鲜
       - no-store 不使用缓存，所有的缓存都不使用
       - public 所有的内容都可以被缓存
       - private： 所有的内容只有客户端才可以被缓存，代理服务器不能缓存(如：CDN)，只能被单个用户缓存

       - 缺点： 若版本存在问题，到期之前的修改客户端是不可知的
    - express http1.0
      - 是一个绝对时间(当前时间+缓存时间)，用以表达在这个时间点之前发起请求可以直接从浏览器中读取数据，而无需发起请求
      - 缺点： 1 可以手动修改服务器的时间  2 或者是可能因为误差等因素造成客户端时间和服务端时间不一致，导致缓存失败
    
  - 协商缓存：  
    客户端与服务器之间能实现缓存文件是否更新验证，提升缓存的复用率，将缓存信息中的Etag 和last-modified 通过请求发送给服务器，由服务 器校验，返回304 状态码时，浏览器直接使用缓存
    - 当浏览器中设置了缓存的时候，在请求头中设置了if-modified-Since 和if-None-Match 去和服务端对比数据，如果一致，则返回状态码304，否则的话，加载浏览器缓存，并修改last-modified 和 Etag
    - 1.0 last-modified(if-modified-Since) 服务器最后修改的时间
      - 存储的是一个UTC的最后修改时间 浏览器将这个值和内容记录在缓存数据库中
    - 1.1 etag(if-None-Match) 服务器资源的唯一标识，只要由资源变化，etag  就是重新生成


### http1.0 与2.0 的区别

  http 的作用就是将超文本语言 html 文档从web 服务器传送到客户端浏览器，html放在web 服务器上，通过URL 像服务端请求获取网页所需要的内容，出现ajax 请求部分的数据，这些都是基于http的

  HTTP1.0 和HTTP1.1 区别 
  主要区别体现在
   - 缓存处理： 1.0 中使用的是 if-modified-Since(last-Modified)



### 在浏览器输入URL 发生了什么
### JS引擎解析过程（JS的解释阶段，预处理阶段，执行阶段生成执行上下文，VO，作用域链、回收机制等等）
### 浅拷贝 深拷贝
### 原型链
### new  手写一个new
    - 创建一个新对象
    - 将构造函数的作用域赋给新对象 因为this的指向了这个新对象
    - 执行构造函数中的代码 为这个对象添加属性
    - 返回新对象
### 继承
    ```js
    function inheritPrototype(subType,superType){
      var prototype = Object.create(superType.prototype);
      prototype.constructor = subType;
      subType.prototype = prototype;
    }
    ```
### 

