module.exports = {
    entry: './src/bootstrap.ts',
    output: require('./webpack/options/output')(__dirname),
    module: {
        rules: [
            require('./webpack/rules/css-rule'),
            require('./webpack/rules/html-rule'),
            require('./webpack/rules/png-rule'),
            require('./webpack/rules/ts-rule')
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    devServer: require('./webpack/options/dev-server')(__dirname),
    devtool: 'source-map'
}
