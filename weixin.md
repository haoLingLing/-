小程序基本架构

逻辑层 js-> 业务处理 生命周期(Page、App)、事件逻辑的处理，数据的加载和处理\
单独的线程  => ios/jscore  安卓／v8
              一个逻辑层 App1 多个 pages 放在同一个逻辑层中

视图层  wxml wxss  页面的基本结构 样式 webkit  iframe 单独的线程  Event Data

JSBridge  

微信开发者工具
  双线程
  js -> iframe
  webComponent 


  1 page()  App
  2 通信 
  3 生命周期
  4 调用原生APi的东西

  基础库 运行环境

  html
  1 事件处理
  2 通信
  3 数据=》 页面
  4 web Component 提供组件系统

  help() 方法，查看基础库
  openVendor()  

  2.0.4 wxvpkg => 基础库
  wcc Wechat WXML Complier  WXML(动态数据 js)

  wcsc  rpx根据手机分辨率 动态像素
  打包时候词法分析 
  js 运行时 计算像素 拼接css


  淘米水 香油超泡菜 小火慢炖 豆腐+辣椒面+葱段