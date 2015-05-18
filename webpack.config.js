module.exports = {
    entry: ['./app/main.js'],

    output: {
        path: __dirname,
        filename: 'build/bundle.js'
    },

    module: {
        loaders: [
            {test: /\.js$/, loader: 'jsx-loader'}
        ]
    }
};
