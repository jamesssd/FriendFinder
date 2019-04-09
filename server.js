var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');

var app = express();

var PORT = process.env.PORT || 3000;

require("./app/routes/apiRoutes")(app, path)
require("./app/routes/htmlRoutes")(app, path)

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(htmlRoutes);
// app.use(apiRoutes);



app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});