const express = require("express");
// const exphbs = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.static("pubic"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

let routes = require("./controllers/burgers_controller");
app.use(routes);

app.listen(PORT, () =>{
    console.log("server listening on: http://localhost" + PORT);
});
