var path = require('path'),
    paths = {
        context: __dirname,
        entry: path.join(__dirname, 'src', 'index.js'),
        build: path.join(__dirname, 'lib')
    };

module.exports = {
    context: paths.context,
    entry: [paths.entry],

    output: {
        filename: 'bundle.js',
        path: paths.build
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loaders: ['style', 'css'],
                exclude: /node_modules/
            }
        ]
    }
};
