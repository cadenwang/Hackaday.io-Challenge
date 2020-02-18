const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const indexRoute = require('./routes/index');
const projectRoute = require('./routes/project');
const ajaxRoute = require('./routes/ajax');

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, '/public')));

// home page
app.get('/', indexRoute.get);

// project details page
app.get('/project/:id', projectRoute.get);

// ajax routes
app.get('/ajax/projects/:page', ajaxRoute.projects);
app.get('/ajax/user/:id', ajaxRoute.user);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App started on port ${port}`);
});
