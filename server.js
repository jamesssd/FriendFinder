var express = require("express");
var path = require("path");

var app = express();

var PORT = process.env.PORT || 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(htmlRoutes);
app.use(apiRoutes);

require("./app/routes/apiRoutes")(app)
require("./app/routes/htmlRoutes")(app)

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});