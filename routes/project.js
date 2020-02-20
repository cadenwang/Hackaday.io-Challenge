const projectRoute = {};
const axios = require('axios');
const apiKey = require('../config.js').hackaday.apiKey;
const {getProjectById, getUserByUserId} = require('../public/javascripts/apiCalls.js');


projectRoute.get = async function (req, res, next) {
    const projectId = req.params.id;
    const project = await getProjectById(projectId);
    const user = await getUserByUserId(project.owner_id);
    res.render('project', {
        project: project,
        user: user, 
        projectId: projectId
    })
}

module.exports = projectRoute;
