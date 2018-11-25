var path = require("path")
var webpack = require('webpack')

var env = process.env.NODE_ENV

console.log(env);


module.exports = {
    //入口
    entry:["babel-polyfill",path.resolve(__dirname,'./src/index.js')],
    //编译到的目标
    output: {
        path: path.resolve(__dirname,'./public'),
        filename: 'bundle.js',
    },
    //webpack-dev-server配置
    devServer: {
        contentBase: './public',//默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录（本例设置到"public"目录）
        // host:0.0.0.0
        // historyApiFallback: true,//在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        inline: true,//设置为true，当源文件改变时会自动刷新页面
        port: 8082,//设置默认监听端口，如果省略，默认为"8080"
    },
    devtool: 'eval-source-map',

    plugins: [
        new webpack.HotModuleReplacementPlugin()//热模块替换插件
    ],
    resolve: {

        alias: {
            //用@直接指引到src目录下，如：'./src/main'可以写成、'@/main'
            '@': path.resolve(__dirname,'./src'),
            'vue': 'vue/dist/vue.js'
        }
    },

    module: {
        loaders: [
            {
                test: /\.js$/,//一个匹配loaders所处理的文件的拓展名的正则表达式，这里用来匹配js文件（必须）
                exclude: /node_modules/,//屏蔽不需要处理的文件（文件夹）（可选）
                loader: 'babel-loader',//loader的名称（必须）
                query: {
                    presets: ['es2015'],
                    plugins: [

                    ],
                },
            },
            {
                test:/\.vue$/,
                loader:'vue-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(png|jpg|jpeg|JPEG|gif|woff|woff2|svg|eot|ttf)$/,
                loader: 'url-loader?limited=10240000'
            }
        ]
    }
}

