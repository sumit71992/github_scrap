const express = require("express");
const mainController = require("../controller/MainController")
const router = express.Router();
const app = express();


router.route("/").get( mainController.index);


module.exports = router;