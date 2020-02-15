const gulp = require('gulp');
const sass = require('gulp-sass');
const nodemon = require('gulp-nodemon');

const buildSass = () => {
    return gulp.src('./public/stylesheets/sass/**/*.scss')
        .pipe(sass({
            includePaths: ['node_modules/bootstrap/scss']
        }).on('error', sass.logError))
        .pipe(gulp.dest('./public/stylesheets'));
};

const watchApp = done => {
    let started = false;
    nodemon({
        script: 'app.js',
        ext: 'js json',
        ignore: ['public/**/*.js'],
        env: {
            'NODE_ENV': 'dev',
            'TZ': 'UTC'
        }
    }).on('start', () => {
        if (!started) {
            done();
            started = true;
        }
    });
};

const watchSass = done => {
    gulp.watch('./public/stylesheets/sass/**/*.scss').on('change', gulp.series([buildSass]));
    done();
};

module.exports.dev = gulp.parallel([watchApp, watchSass]);
module.exports['build-sass'] = buildSass;
module.exports['watch-sass'] = watchSass;
