const { json } = require("express");
const Course = require("../models/Course");
class SiteController {
    //[GET] /news
    async index(req, res) {
        try {
            const courses = await Course.find({});
            res.json(courses);
            console.log(courses);
        } catch (err) {
            res.status(400).json({ error: "ERROR" });
        }
    }

    //[GET] /:slug
    search(req, res) {
        res.render("search");
    }
}

module.exports = new SiteController();
