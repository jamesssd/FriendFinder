// API ROUTES

//TODO: Create GET routes for /api/friends (display a JSON of all possible friends)
//TODO: Create POST routes for /api/friends (use to handle incoming survey results.)

let friendsData = require('../data/friends');

module.exports = function(app){
    app.get('/api/survey', function(req, res){
        res.json(friends)
    })
}