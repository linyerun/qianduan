const path = require('path')

// 导入HTML插件
const HtmlPlugin = require('html-webpack-plugin')

// 创建HTML插件实例对象
const htmlPlugin = new HtmlPlugin({
    template: './src/index.html', //原文件存放路径
    filename: './index.html' //生成文件存放路径
})

// 注意：左侧的 { } 是解构赋值
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const cleanWebpackPlugin = new CleanWebpackPlugin()

module.exports = {
    // 在开发调试阶段，建议大家都把 devtool 的值设置为 eval-source-map
    // devtool: 'eval-source-map',
    // 在实际发布的时候，建议大家把 devtool 的值设置为 nosources-source-map 或直接关闭 SourceMap
    devtool: 'nosources-source-map',
    entry: path.join(__filename,'./src/index.js'), //打包入口
    output: {
        path: path.join(__filename,'./dist'), //输出文件存放位置
        filename: 'bundle.js' //输出文件名称
    },
    mode: 'development',
    plugins: [htmlPlugin,cleanWebpackPlugin], //让插件生效
    devServer: {
        open: true, //自动打开浏览器
        host: '127.0.0.1',  //实时打包所使用到的主机地址
        port: 9999, //实时打包所使用的端口号
    },
    module: {   //第三方文件模块匹配规则
        rules: [    // 文件后缀名匹配规则(test 表示匹配的文件类型， use 表示对应要调用的 loader)
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },//use 数组中指定的 loader 顺序是固定的
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            { test: /\.jpg|png|gif$/, use: 'url-loader?limit=470&outputPath=images' },//limit 用来指定图片的大小，单位是字节-byte
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
        ],
    },
}