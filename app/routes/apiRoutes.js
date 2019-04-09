// API ROUTES

//TODO: Create GET routes for /api/friends (display a JSON of all possible friends)
//TODO: Create POST routes for /api/friends (use to handle incoming survey results.)

let friendsData = require('/Users/dizon/Documents/Bootcamp/FriendFinder/app/data/friends');
let router = express.Router();
var path = require("path");

module.exports = function(app){
    router.get('/api/friends', function(req, res){
        res.json(friends);
    });


    router.post('/api/friends', function(req, res){
        let use = req.body;
        let newFriendScore = req.body.scores;
        let scoresArr = [];
        let friendCount = 0;
        let bestMatch = 0;

        for (let i = 0; i < friendsArr.length; i++) {
            let scoresDiff = 0;
            for(var j=0; j<newFriendScores.length; j++){
            scoresDiff += (Math.abs(parseInt(friendList[i].scores[j]) - parseInt(newFriendScores[j])));
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
        let newHomie = friendList[bestMatch];
        res.json(newHomie);

        //pushes new submission into the friendsList array
        friendList.push(req.body);
        });
    };
            
        