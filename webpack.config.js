const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/,
                options: {
                    presets: ['react', 'es2015', 'stage-0', 'stage-2'],
                }
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        watchContentBase: true,
        open: true,
        port: 8080,
    },
};