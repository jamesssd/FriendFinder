var express = require("express");
var path = require("path");

var app = express();

var PORT = process.env.PORT || 3000;

var apiRoutes = require("./app/routes/apiRoutes")(app)
var htmlRoutes = require("./app/routes/htmlRoutes")(app)

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(htmlRoutes);
app.use(apiRoutes);



app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});