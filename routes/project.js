const projectRoute = {};
const axios = require('axios');
const apiKey = require('../config.js').hackaday.apiKey;

projectRoute.get = function (req, res, next) {
    const projectId = req.params.id;
    axios.get(`http://api.hackaday.io/v1/projects/${projectId}?api_key=${apiKey}`).then(data => {

        return res.render('project', { projectId: projectId, project: data.data });
    }).catch(err => {
        console.log('failed to get data PROJECT.JS', err)
    })
    
}

module.exports = projectRoute;
