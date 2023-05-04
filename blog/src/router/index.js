const siteRouter = require('./site');
const newsRouter = require('./news');
const meRouter = require('./me');
const CoursesRouter = require('./courses');

function router(app) {
    app.use('/news', newsRouter);

    app.use('/', siteRouter);

    app.use('/me', meRouter);

    app.use('/courses', CoursesRouter);
}

module.exports = router;
