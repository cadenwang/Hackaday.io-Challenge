const ajaxRoute = {};
const {getProjectsData, getUsersByListOfIds} = require('../public/javascripts/apiCalls.js');

ajaxRoute.projects = async function (req, res, next) {
    const page = req.params.page;
    const projectsData = await getProjectsData(page);
    const usersData = await getUsersByListOfIds(projectsData);

    res.json({
        page,
        projects: projectsData.projects,
        currentPage: projectsData.page,
        totalPages: projectsData.last_page,
        usersData
    })
}

module.exports = ajaxRoute;
