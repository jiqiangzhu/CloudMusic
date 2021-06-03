const path = require("path");
const webpack = require('webpack')
module.exports = {
    // publicPath: 'http://blairq.gitee.io/cloud-music/',
    publicPath: './',
    pages: {
        index: {
            entry: 'src/main.js',
            title: 'QG音乐'
        }
    },
    devServer: {
        port: 8080, // 端口
        proxy: { // 配置跨域处理 可以设置多个
            '/api': {
                target: 'http://api.blairq.top/',//跨域请求头信息
                changeOrigin: true,
                ws: false,
                pathRewrite: {
                    '^/api': '/'
                }
                //pathRewrite: {'^/api': '/'} 重写之后url为 http://a.abc.com:8081/xxxx
                //pathRewrite: {'^/api': '/api'} 重写之后url为 http://a.abc.com:8081/api/xxxx
            }
        }
    },
    css: {
        loaderOptions: {
            less: {
                // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。
                // lessOptions: {
                modifyVars: {
                    // 直接覆盖变量
                    // 'text-color': '#111',
                    // 'border-color': '#eee',
                    // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
                    hack: `true; @import "${path.join(
                        __dirname,
                        "./src/common/resetLess.less"//这个import 的路径必须是绝对路径
                    )}";`
                },
                // },
            },
        },
    },
    pluginOptions: {
        electronBuilder: {
            nodeIntegration: true
        }
    }
}