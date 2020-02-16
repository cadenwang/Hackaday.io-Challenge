// const request = require('request');
const axios = require('axios');
const apiKey = require('../config.js').hackaday.apiKey;
const indexRoute = {};

const getProjectsData = () => {
    const projects = `http://api.hackaday.io/v1/projects?api_key=${apiKey}&sortby=newest`;

    return axios.get(projects).then(projectsData => {
        return projectsData.data;

    }).catch(err => {
        console.log('Failed to get projects list data', err);
    })
}

const getUsersByProjectId = (projects) => {
    const userIdList = [];
    projects.projects.forEach(project => {
        userIdList.push(project.owner_id);
    })
    let userIdString = userIdList.join(',');
    const usernames = `http://api.hackaday.io/v1/users/batch?ids=${userIdString}&api_key=${apiKey}`;

    return axios.get(usernames).then(data => {
        const usersData = data.data.users;

        /*Most of the time the Batch API call will return less than 50 users, b/c some users appear more than once -
        Here we create a map of user ids with screen names, which allows us to map to the correct user on index.ejs  */
        const usersMap = new Map();
        usersData.forEach(user => {
            usersMap.set(user.id, user.screen_name);
        })
        console.log(usersMap.size);
        return [usersData, usersMap];
    }).catch(err => {
        console.log('Failed to get user data by project id', err);
    })
}


indexRoute.get = async function (req, res, next) {
    const projects = await getProjectsData();
    const [usersData, usersMap] = await getUsersByProjectId(projects);
    return res.render('index', {projects: projects, users: usersData, usersMap: usersMap});
}



module.exports = indexRoute;
