const request = require('request');
const axios = require('axios');
const apiKey = require('../config.js').hackaday.apiKey;
const indexRoute = {};



indexRoute.get = function (req, res, next) {
    axios.get(`http://api.hackaday.io/v1/projects?api_key=${apiKey}&sortby=newest`).then(data => {
        // console.log(data.data.projects);
        return res.render('index', {data: data.data});
    }).catch(err => {
        console.log('failed to get data', data)
    })
    
}

module.exports = indexRoute;
