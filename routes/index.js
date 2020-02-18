const indexRoute = {};
const {getProjectsData, getUsersByProjectId} = require('../public/javascripts/helpers.js');

indexRoute.get = async function (req, res, next) {
    const projectsData = await getProjectsData();
    const usersData = await getUsersByProjectId(projectsData);

    return res.render('index', {projects: projectsData.projects,
                                currentPage: projectsData.page,
                                totalPages: projectsData.last_page,
                                usersData: usersData
                                });
}

module.exports = indexRoute;
