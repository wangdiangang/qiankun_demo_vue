# qiankun_demo_vue
以vue为技术栈实现一个简单的微前端demo

# 掘金文章
   1. 脚手架生成main-app基座项目
   2. 脚手架生成child-vue与child-vue-create子项目
   3. 在main-app/main.js引入qiankun结构{registerMicroApps, start}
   4. 配置registerMicroApps子路径并且start()
   5. 子组件main.js定义render函数，引入主应用的store数据根据是否qiankun独立运行给默认值
   6. 抛出bootstrap  mount unmount 函数
   7. 子路由导出base配置window.__POWERED_BY_QIANKUN__是否挂在在qiankun进行路由定向
## npm-run-all
    ``` JavaScript
    package.json
    安装npm-run-all
    "install": "npm-run-all --serial install:*",
    "install:child-vue": "cd child-vue && npm install",
    "install:child-vue-create": "cd child-vue-create && npm install",
    "start": "npm-run-all --parallel start:*",
    "start:main-app": "cd main-app && npm run serve",
    "start:child-vue": "cd child-vue && npm run serve",
    "start:child-vue-create": "cd child-vue-create && npm run serve",
    ```