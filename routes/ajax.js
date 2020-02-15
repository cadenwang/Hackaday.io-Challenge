const ajaxRoute = {};

ajaxRoute.projects = function (req, res, next) {
    const page = req.params.page;
    return res.send(`ajax.projects page: ${page}`);
}

ajaxRoute.user = function (req, res, next) {
    const userId = req.params.id;
    return res.send(`ajax.user id: ${userId}`);
}

module.exports = ajaxRoute;
