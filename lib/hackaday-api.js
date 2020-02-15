const _ = require('lodash');
const request = require('request');

const config = require('../config');

const hackaday = {};

hackaday.projects = function (opts, callback) {
    const params = _.pick(opts, ['page', 'per_page']);

    return defaultRequest()({
        uri: '/projects',
        qs: params
    }, callback);
}

hackaday.projectDetails = function (projectId, callback) {
    return defaultRequest()({
        uri: `/projects/${projectId}`
    }, callback);
}

hackaday.userDetails = function (userId, callback) {
    return defaultRequest()({
        uri: `/users/${userId}`
    }, callback);
}

function defaultRequest () {
    return request.defaults({
        baseUrl: config.hackaday.host,
        qs: {
            api_key: config.hackaday.apiKey
        }
    });
}

module.exports = hackaday;
