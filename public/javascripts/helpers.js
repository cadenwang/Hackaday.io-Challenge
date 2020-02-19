const axios = require('axios');
const apiKey = require('../../config.js').hackaday.apiKey;

const getProjectsData = (page) => {
    const projects = `http://api.hackaday.io/v1/projects?api_key=${apiKey}&page=${page}&sortby=newest`;
  
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
  const users = `http://api.hackaday.io/v1/users/batch?ids=${userIdString}&api_key=${apiKey}`;

  return axios.get(users).then(data => {
      const usersData = data.data.users;

      /*Most of the time the Batch API call will return less than 50 users, b/c some users appear more than once -
      Here we create a map-like object of user ids with user info, which allows us to map to the correct user on index.ejs  */
      const usersMap = {};
      usersData.forEach(user => {
          usersMap[user.id] = user;
      })

      return usersMap;
  }).catch(err => {
      console.log('Failed to get user data by project id', err);
  })
}

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
  getUsersByProjectId,
  getAllUsersData
}