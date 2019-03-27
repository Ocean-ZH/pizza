// vue.config.js
const webpack = require("webpack");

module.exports = {
    // 选项...
    publicPath:'/pizza/dist',
    devServer:{
        port:8080,
        open:true,
    },
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
                Popper: ['popper.js', 'default']
            })
        ]
    },
}