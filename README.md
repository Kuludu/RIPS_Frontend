# 轨道交通智能预测系统-前端部分（RIPS-Frontend）

*** 

## 项目说明

本项目系本人本科毕业设计《轨道交通智慧客流分析预测系统设计》前端部分，现开放源代码供参考，代码归属本人本科院校所有。

This project is the front-end part of my undergraduate graduation design "rail transit intelligent passenger flow analysis and prediction system design", now open source code for reference, the code is owned by my undergraduate institution.

## 项目结构

```
rips_frontend
├─ babel.config.js
├─ package.json
├─ public
│    └─ index.html
├─ src
│    ├─ App.vue # 主入口
│    ├─ assets # 资源文件
│    │    ├─ line.png # 线路导航图
│    │    ├─ pic.png # 主页图
│    │    └─ site.png # 站点导航图
│    ├─ components # 部件
│    │    ├─ AdminHeadBar.vue # 管理头部
│    │    ├─ BigData.vue # 大数据管理
│    │    ├─ Complex_1.vue # 复杂查询1
│    │    ├─ Default.vue # 主页
│    │    ├─ FootBar.vue # 底部
│    │    ├─ HeadBar.vue # 头部
│    │    ├─ History.vue # 历史查询
│    │    ├─ HistoryNav.vue # 历史导航
│    │    ├─ LineNav.vue # 线路导航
│    │    ├─ LineStatus.vue # 线路状态
│    │    ├─ Login.vue # 管理登陆
│    │    ├─ Parameter.vue # 参数设置
│    │    ├─ SiteNav.vue # 站点导航
│    │    ├─ SiteStatus.vue # 站点状态
│    │    ├─ SituManage.vue # 特情管理
│    │    ├─ Situation.vue # 特情
│    │    └─ UserManage.vue # 用户管理
│    ├─ main.js # 主入口js
│    └─ utils # 工具类
│           ├─ echarts.js # ECharts
│           └─ router.js # 路由
├─ vue.config.js
└─ yarn.lock
```