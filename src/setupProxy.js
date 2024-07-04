const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
        target: 'https://itgirlschool.justmakeit.ru',
        changeOrigin: true,
        pathRewrite: {
            '^/api': '', // удаляет /api из запроса
        },
        })
    );
};