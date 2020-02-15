const projectRoute = {};

projectRoute.get = function (req, res, next) {
    const projectId = req.params.id;
    return res.render('project', { projectId: projectId });
}

module.exports = projectRoute;
