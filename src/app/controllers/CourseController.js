const { json } = require("express");
const Course = require("../models/Course");
const { render } = require("node-sass");
class CourseController {
    //[GET] /news

    //[GET] /:slug
    async show(req, res, next) {
        try {
            const course = await Course.findOne({
                slug: req.params.slug,
            }).lean();
            res.render("courses/show", { course });
        } catch (next) {}
    }
    create(req, res, next) {
        res.render("courses/create");
    }
}

module.exports = new CourseController();
