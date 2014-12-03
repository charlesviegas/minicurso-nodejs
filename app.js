var express = require("express"),
    bodyParser = require("body-parser"),
    load = require("express-load"),
    expressSession = require("express-session"),
    app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(expressSession({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true
}));

load("controllers")
    .then("routes")
    .into(app);

app.listen(3000, function () {
    console.log("O servidor está no ar.");
});