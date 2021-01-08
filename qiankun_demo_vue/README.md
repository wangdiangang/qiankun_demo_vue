# qiankun_demo_vue
以vue为技术栈实现一个简单的微前端demo

# 掘金文章
    1.创建子应用；
    2：main.js创建render函数
    3：是否独立运行子应用
    4：调用bootstrap mount  unmount函数
    5：基座main.js 添加入口
## npm-run-all
    1.安装npm-run-all
    2."install": "npm-run-all --serial install:*",
    2、、。"install:child-vue": "cd child-vue && npm install",
    2。"install:child-vue-create": "cd child-vue-create && npm install",
    2."start": "npm-run-all --parallel start:*",
    2."start:main-app": "cd main-app && npm run serve",
    2."start:child-vue": "cd child-vue && npm run serve",
    2."start:child-vue-create": "cd child-vue-create && npm run serve",