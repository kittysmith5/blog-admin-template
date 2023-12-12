const {
    defineConfig
} = require('@vue/cli-service')

module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,
    devServer: {
        host: '127.0.0.1',
        port: 9090,
        proxy: 'http://127.0.0.1:3000',
    },
})