const path = require("path");
const WebpackBar = require('webpackbar')
const isProd = process.env.NODE_ENV.startsWith('prod');

const externals = {
  swiper: 'Swiper'
}

const cdn = {
  css: [
    "https://cdn.bootcdn.net/ajax/libs/Swiper/5.4.5/css/swiper.min.css"
  ],
  js: [
    "https://cdn.bootcdn.net/ajax/libs/Swiper/5.4.5/js/swiper.min.js",
  ]
}

module.exports = {
  configureWebpack: config => {
    const plugins = [];
    plugins.push(
      new WebpackBar({
        name: 'QG',
        color: '#6950a1'
      }),
    );
    config.plugins = [...config.plugins, ...plugins];
  },
  chainWebpack: config => {
    // 生产环境
    config.when(isProd, config => {
      config.entry("app").clear().add("./src/main-prod.js");
      config.set("externals", externals);
      config.plugin("html").tap(args => {
        args[0].cdn = cdn
        args[0].title = 'QG'
        args[0].url = './'
        return args;
      })
    })
    // 开发环境
    config.when(!isProd, config => {
      config.entry("app").clear().add("./src/main-dev.js")
    })
  },

  publicPath: './',
  devServer: {
    open: false,
    port: 8081, // 端口
    proxy: { // 配置跨域处理 可以设置多个
      '/api': {
        target: 'https://qg-unlock-netease-cloud.blairq.top/',//跨域请求头信息
        changeOrigin: true,
        ws: false,
        pathRewrite: {
          '^/api': '/'
        }
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
      }
    },
  }
}