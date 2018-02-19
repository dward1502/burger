const express = ('express');
const methodOverride = ('method-override');
const bodyParser = ('body-parser');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const exphbs = require('express-handlebars');

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", " handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function(){
    console.log("App now listneing at localhost : " + PORT);
})
