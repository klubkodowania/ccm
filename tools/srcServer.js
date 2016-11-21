import browserSync from "browser-sync";
import historyApiFallback from "connect-history-api-fallback";
import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import proxyMiddleware from "http-proxy-middleware";
import config from "../webpack.config.dev";

const appConfig = Object.assign({}, config);
const appBundler = webpack(appConfig);

const backend = {
    host: process.env.BACKEND_HOST || "localhost",
    port: process.env.BACKEND_PORT || "9080"
};

const restProxy = proxyMiddleware("/rest", {
    target: `http://${backend.host}:${backend.port}`
});

browserSync.create().init({
    port: 3000,
    ui: {
        port: 3001
    },
    server: {
        baseDir: "src",
        middleware: [
            restProxy,
            webpackDevMiddleware(appBundler, {
                publicPath: appConfig.output.publicPath,
                stats: {colors: true},
                noInfo: true
            }),
            webpackHotMiddleware(appBundler),
            historyApiFallback()
        ]
    },
    files: [
        "src/*.html"
    ]
});
