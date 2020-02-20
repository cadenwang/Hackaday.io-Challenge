const axios = require('axios');
const apiKey = require('../../config.js').hackaday.apiKey;


const getProjectsData = (page) => {
    const projects = `http://api.hackaday.io/v1/projects?api_key=${apiKey}&page=${page}&sortby=newest&per_page=30`;
    return axios.get(projects).then(projectsData => {
        return projectsData.data;

    }).catch(err => {
        console.log('Failed to get projects list data', err);
    })
}

const getUsersByListOfIds = (projects) => {
    const userIdList = [];
    projects.projects.forEach(project => {
        userIdList.push(project.owner_id);
    })
    let userIdString = userIdList.join(',');
    const users = `http://api.hackaday.io/v1/users/batch?ids=${userIdString}&api_key=${apiKey}`;

    return axios.get(users).then(data => {
        const usersData = data.data.users;

        /*Most of the time the Batch API call will return less than 50 users, b/c some users appear more than once -
        Here we create a JS object of user ids with user info, which allows us to map to the correct user on index.ejs  */
        const usersMap = {};
        usersData.forEach(user => {
            usersMap[user.id] = user;
        })

        return usersMap;
    }).catch(err => {
        console.log('Failed to get users by project ids', err);
    })
}

const getUserByUserId = (userId) => {
    const user = `http://api.hackaday.io/v1/users/${userId}?api_key=${apiKey}`;
    return axios.get(user).then(data => {
        return data.data;
    }).catch(err => {
        console.log('failed to get user by user id', err)
    })
}


const getProjectById = (projectId) => {
    const project = `http://api.hackaday.io/v1/projects/${projectId}?api_key=${apiKey}`;
    return axios.get(project).then(data => {
        return data.data;
    }).catch(err => {
        console.log('failed to get project by id', err)
    })
}

//Searches for similar users and returns any user with AT LEAST 2 matching tags
const searchRelatedUsers = (tags) => {
    if (tags) {
        let tagSet = new Set();
        tags.forEach(tag => {
            tagSet.add(tag);
        })
        const users = `http://api.hackaday.io/v1/users/search?tag=${tags[0]}&api_key=${apiKey}`;
        return axios.get(users).then(usersData => {
            let similarUsersList = [];
            for (let num = 0; num < usersData.data.users.length; num++) {
                let user = usersData.data.users[num];
                let matchingTags = 1;
                for (let i = 0; i < user.tags.length; i++) {
                    const tag = user.tags[i];
                    if (tag !== tags[0] && tagSet.has(tag)) {
                        matchingTags++;
                        if (matchingTags > 1) {
                            similarUsersList.push(user);
                            break;
                        }
                    }
                }
                if (matchingTags > 1) {
                    continue;
                }
            }
            return similarUsersList;
        }).catch(err => {
            console.log('failed to get users by tag', err)
        })
    } else {
        return [];
    }
}

/* ***NOT USED*** could be used to get every user, map it, and stored in sessionStorage 
so that tooltip data would only need to be requested once per browsing session*/
const getAllUsersData = () => {
    const users = `http://api.hackaday.io/v1/users?api_key=${apiKey}`;
    
    return axios.get(users).then(data => {
        const usersData = data.data.users;

        const usersMap = new Map();
        usersData.forEach(user => {
            usersMap.set(user.id, user);
        })

        return usersMap;
    }).catch(err => {
        console.log('Failed to get all users data', err);
    })
}

module.exports = {
    getProjectsData,
    getUsersByListOfIds,
    getProjectById,
    getUserByUserId,
    searchRelatedUsers,
    getAllUsersData
}