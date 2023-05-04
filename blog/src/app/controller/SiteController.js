const Course = require('../models/Course');
const {mutipleMongooseToObject} = require('../../util/mongoose');

class SiteController {
    index(req, res ,next) {

        Course.find({})
            .then(courses => {
                res.render('homes',{
                    courses: mutipleMongooseToObject(courses)
                })
            })
            .catch(next);

        // res.render('homes');
    }
    
    show(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
