/*
 * @Author: 五道杠
 */
module.exports = {
    devServer: {
        port: 10001,
        headers: {
            'Access-Control-Allow-Origin': '*' // 主应用获取子应用时跨域响应头
        }
    },
    configureWebpack: {
        output: {
            library: `vue`,
            libraryTarget: 'umd',
        }
    }
}