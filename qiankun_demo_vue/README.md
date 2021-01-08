# qiankun_demo_vue
以vue为技术栈实现一个简单的微前端demo

# 掘金文章
    1.创建子应用；
    2：main.js创建render函数
    3：是否独立运行子应用
    4：调用bootstrap mount  unmount函数
    5：基座main.js 添加入口
## npm-run-all
    ``` JavaScript
    package.json
    安装npm-run-all
    "install": "npm-run-all --serial install:*",
    、。"install:child-vue": "cd child-vue && npm install",
    "install:child-vue-create": "cd child-vue-create && npm install",
    "start": "npm-run-all --parallel start:*",
    "start:main-app": "cd main-app && npm run serve",
    "start:child-vue": "cd child-vue && npm run serve",
    "start:child-vue-create": "cd child-vue-create && npm run serve",
    ```