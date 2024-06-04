const { json } = require("express");
const Course = require("../models/Course");
class SiteController {
    //[GET] /news
    async index(req, res, next) {
        try {
            const courses = await Course.find({}).lean();
            res.render("home", {
                courses,
            });
        } catch (err) {
            next();
        }
    }

    //[GET] /:slug
    search(req, res) {
        res.render("search");
    }
}

module.exports = new SiteController();
