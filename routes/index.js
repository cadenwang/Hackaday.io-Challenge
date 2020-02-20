const indexRoute = {};
const {getProjectsData, getUsersByProjectId} = require('../public/javascripts/apiCalls.js');

indexRoute.get = async function (req, res, next) {
    let page = req.params.page || 1;
    const projectsData = await getProjectsData(page);
    const usersData = await getUsersByProjectId(projectsData);

    return res.render('index', {projects: projectsData.projects,
                                currentPage: projectsData.page,
                                totalPages: projectsData.last_page,
                                usersData: usersData
                                });
}

module.exports = indexRoute;
