const ajaxRoute = {};
const axios = require('axios');
const apiKey = require('../config.js').hackaday.apiKey;
const {getProjectsData, getUsersByProjectId} = require('../public/javascripts/helpers.js');



ajaxRoute.projects = async function (req, res, next) {
    const page = req.params.page;
    const projectsData = await getProjectsData(page);
    const usersData = await getUsersByProjectId(projectsData);
    // return res.send(`ajax.projects page: ${page}`);
    console.log('AJAX PAGE:', page);
    return res.render('index', {projects: projectsData.projects,
                                currentPage: projectsData.page,
                                totalPages: projectsData.last_page,
                                usersData: usersData
    });
}

ajaxRoute.user = function (req, res, next) {
    const userId = req.params.id;
    return res.send(`ajax.user id: ${userId}`);
}

module.exports = ajaxRoute;
