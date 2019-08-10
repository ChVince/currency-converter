let LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
    mode: "development",
    devtool: "source-map",
    devServer: {
        contentBase: './dist'
    },
    entry: ['./src'],
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },
    plugins: [
        //opts:
        // protocol
        // port
        // hostname
        // appendScriptTag,
        // ignore
        // delay
        new LiveReloadPlugin({
            appendScriptTag: true
        })
    ],
    // TODO: why it's not global?
    externals: {
        "react": "React",
        "react-dom": "ReactDOM",
        "prop-types": "PropTypes"
    }
};