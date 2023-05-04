const Courses = require('../models/Course');
const {mongooseToObject, mutipleMongooseToObject} = require('../../util/mongoose');
const Course = require('../models/Course');

class CoursesController {

    show(req, res, next){

        Courses.findOne({slug : req.params.slug})
            .then(courses =>
                res.render('Courses/show', { courses : mongooseToObject(courses)})
            )
            .catch(next)
    }

        //[GET] /course/create
    create(req, res, next){
        res.render('Courses/create')
    }
        //[POST] /course/store
    store(req, res, next){
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${formData.videoId}/sddefault.jpg`
        const course = new Course(formData)
        course.save()
            .then(() => res.redirect(`/`))
            .catch(err =>{
                
            })
        
    }
    edit(req, res, next){
        Course.findById(req.params.id)
            .then(course => res.render('Courses/edit', {
                course: mongooseToObject(course)
            }))
            .catch(next)
    }
        //[PUT] /course/:id
    update(req, res, next) {
        Course.updateOne({_id: req.params.id}, req.body)
            .then(() => res.redirect('/me/stored/courses',{
                course: mongooseToObject(course)
            }))
            .catch(next)
    }


        //[Delete] /courses/:id
    delete(req, res, next) {
        Course.deleteOne({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next);
    }

}

module.exports = new CoursesController();