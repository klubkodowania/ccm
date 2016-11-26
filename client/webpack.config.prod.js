import webpack from "webpack";
import path from "path";
import ExtractTextPlugin from "extract-text-webpack-plugin";
import autoprefixer from "autoprefixer";

const GLOBALS = {
    "process.env.NODE_ENV": JSON.stringify("production"),
    __DEV__: false
};

export default {
    debug: true,
    devtool: "source-map", // more info:https://webpack.github.io/docs/build-performance.html#sourcemaps and https://webpack.github.io/docs/configuration.html#devtool
    noInfo: true, // set to false to see a list of every file being bundled.
    entry: {
        main: "./src/index"
    },
    target: "web", // necessary per https://webpack.github.io/docs/testing.html#compile-and-test
    output: {
        path: `${__dirname}/dist/assets`,
        publicPath: "/",
        filename: "[name].[hash].js"
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin(GLOBALS), // Tells React to build in prod mode. https://facebook.github.io/react/downloads.html
        new ExtractTextPlugin("[name].css"),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ],
    resolve: {
        extensions: ["", ".js", ".jsx"]
    },
    module: {
        loaders: [
            {test: /\.js$/, include: path.join(__dirname, "src"), loaders: ["babel"]},
            {test: /\.jsx$/, include: path.join(__dirname, "src"), loaders: ["babel"]},
            {test: /\.eot(\?v=\d+.\d+.\d+)?$/, loader: "file"},
            {test: /\.(woff|woff2)$/, loader: "file-loader?prefix=font/&limit=5000"},
            {test: /\.ttf(\?v=\d+.\d+.\d+)?$/, loader: "file-loader?limit=10000&mimetype=application/octet-stream"},
            {test: /\.svg(\?v=\d+.\d+.\d+)?$/, loader: "file-loader?limit=10000&mimetype=image/svg+xml"},
            {test: /\.(jpe?g|png|gif)$/i, loaders: ["file?name=../assets/[name].[ext]"]},
            {test: /\.ico$/, loader: "file-loader?name=[name].[ext]"},
            {
                test: /(\.css|\.scss)$/,
                include: path.join(__dirname, "src"),
                loader: ExtractTextPlugin.extract("css?sourceMap!postcss-loader!sass?sourceMap")
            }
        ]
    },
    postcss: function () {
        return [autoprefixer];
    }
};
