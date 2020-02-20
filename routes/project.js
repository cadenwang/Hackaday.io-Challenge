const projectRoute = {};
const {getProjectById, getUserByUserId, searchRelatedUsers} = require('../public/javascripts/apiCalls.js');


projectRoute.get = async function (req, res, next) {
    const projectId = req.params.id;
    const project = await getProjectById(projectId);
    const user = await getUserByUserId(project.owner_id);
    const relatedUsers = await searchRelatedUsers(user.tags);
    res.render('project', {
        project,
        user, 
        projectId,
        relatedUsers
    })
}

module.exports = projectRoute;
