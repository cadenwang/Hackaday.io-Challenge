const indexRoute = {};

indexRoute.get = function (req, res, next) {
    return res.render('index');
}

module.exports = indexRoute;
