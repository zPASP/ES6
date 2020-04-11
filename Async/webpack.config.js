module.exports = {
    entry: ['@babel/polyfill', './src/exercicios/4.js'],
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: __dirname + '/public',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude : /node_modules/,
                use: {
                    loader: 'babel-loader',
                }

            }
        ],
    },
};