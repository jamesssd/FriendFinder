// API ROUTES

//TODO: Create GET routes for /api/friends (display a JSON of all possible friends)
//TODO: Create POST routes for /api/friends (use to handle incoming survey results.)

let friendsData = require('../data/friends');

module.exports = function(app){
    app.get('/api/friends', function(req,res){
        res.json(friends);
    });


    app.post('/api/friends', function(req, res){
        let totalDifference = 0;
        let bestMatch = {
            name: '',
            photo: '',
            friendDifference: 1000
        }
        res.json(friends);

        for (let i = 0; i < friendsArr.length; i++) {
           console.log(friendsArr[i].name);
           totalDifference = 0;            
        }
    });


    //add a clear button?
    // app.post('/api/clear', function(req, res){
    //     survey.length = 0;

    //     res.join({ ok: true });
    // });
};