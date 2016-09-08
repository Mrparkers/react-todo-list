var path = require('path'),
    paths = {
        entry: path.join(__dirname, 'src', 'index.js'),
        build: path.join(__dirname, 'lib')
    };

module.exports = {
    devtool: 'source-map',
    entry: [paths.entry],

    output: {
        filename: 'bundle.js',
        path: paths.build
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['react-hot', 'babel'],
                exclude: /node_modules/
            }
        ]
    }
};
