module.exports = {
    // publicPath: 'http://blairq.gitee.io/cloud-music/',
    publicPath: './',
    pages: {
        index: {
            entry: 'src/main.js',
            title: '音乐'
        }
    },
    devServer: {
        port: 8000, // 端口
    }
}