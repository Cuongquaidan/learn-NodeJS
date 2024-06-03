const express = require("express");
const { engine } = require("express-handlebars");
const morgan = require("morgan");
const app = express();
const port = 3000;
const route = require("./routes");
const db = require("./config/db");
app.use(express.static("./src/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Connect DB
db.connect();

app.use(morgan("combined"));

app.engine(
    "hbs",
    engine({
        extname: ".hbs",
    })
);
app.set("view engine", "hbs");
app.set("views", "./src/resources/views");
route(app);
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
