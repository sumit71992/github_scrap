const express = require('express');
const path = require("path");
const router = express.Router();
const mainRoutes = require("./backend/route/MainRoutes");
const app = express();
const cors = require("cors");
const compression = require("compression");
const bodyparser = require("body-parser");
const logger = require("morgan");


app.use(cors());
app.use(compression());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.set("views", __dirname + "/client/views");
app.engine("html", require("ejs").renderFile);
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, "client/assests/css")));
app.use(express.static(path.join(__dirname, "client/assests/script")));

app.use(logger("dev"));
app.use("/", mainRoutes);
app.set("port", process.env.PORT || 4000);
app.listen(app.get("port"), () => {
    console.log("Application running in port:" + app.get("port"));
})
module.exports = {
    app
}