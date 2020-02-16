const indexRoute = {};
const {getProjectsData, getUsersByProjectId} = require('../public/javascripts/index.js');

indexRoute.get = async function (req, res, next) {
    const projects = await getProjectsData();
    const usersData = await getUsersByProjectId(projects);
    return res.render('index', {projects: projects,
                                usersData: usersData
                                });
}

module.exports = indexRoute;
