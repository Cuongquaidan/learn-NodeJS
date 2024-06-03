class NewsController {
    //[GET] /news
    index(req, res) {
        res.render("news");
    }

    //[GET] /:slug
    show() {
        res.render("Something");
    }
}

module.exports = new NewsController();
