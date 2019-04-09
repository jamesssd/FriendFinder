// API ROUTES

//TODO: Create GET routes for /api/friends (display a JSON of all possible friends)
//TODO: Create POST routes for /api/friends (use to handle incoming survey results.)

let friendsArr = require('../data/friends.js');
// let router = express.Router();
// var path = require("path");

module.exports = function(app, path){
    app.get('./api/friends', function(req, res){
        res.json(friendsArr);
    });


    app.post('./api/friends', function(req, res){
        let use = req.body;
        let newFriendScore = req.body.scores;
        let scoresArr = [];
        let friendCount = 0;
        let bestMatch = 0;

        for (let i = 0; i < friendsArr.length; i++) {
            let scoresDiff = 0;
            for(var j=0; j<newFriendScores.length; j++){
            scoresDiff += (Math.abs(parseInt(friendsArr[i].scores[j]) - parseInt(newFriendScores[j])));
            }

            //push results into scoresArray
            scoresArray.push(scoresDiff);
        }

        //after all friends are compared, find best match
        for(var i=0; i<scoresArray.length; i++){
            if(scoresArray[i] <= scoresArray[bestMatch]){
            bestMatch = i;
            }
        }

        //return bestMatch data
        let newHomie = friendsArr[bestMatch];
        res.json(newHomie);

        //pushes new submission into the friendsList array
        friendsArr.push(req.body);
        });
    };
            
        