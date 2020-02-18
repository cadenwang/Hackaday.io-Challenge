const indexRoute = {};
const {getProjectsData, getUsersByProjectId} = require('../public/javascripts/helpers.js');

indexRoute.get = async function (req, res, next) {
    // let projects = sessionStorage.getItem('projects');
    // let usersData = sessionStorage.getItem('usersData');
    
    const projects = await getProjectsData();
    const usersData = await getUsersByProjectId(projects);
    return res.render('index', {projects: projects,
                                usersData: usersData
                                });
}

module.exports = indexRoute;
