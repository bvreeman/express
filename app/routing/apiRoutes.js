require('nodemon');

const bookCharacter = require('../data/friends');
const path = require('path');

module.exports = function(app) {
  app.get('/api/friends', function(req, res) {
    res.json(bookCharacter);
  });

  app.post('/api/friends', function(req, res) {
    const userScores = req.body.scores;
    const scoresArray = [];

    for (let i = 0; i < bookCharacter.length; i++) {
      let temp = 0;
      for (let j = 0; j < userScores.length; j++) {
        temp += (Math.abs(parseInt(bookCharacter[i].scores[j]) - parseInt(userScores[j])));
      }
      scoresArray.push(temp);
      console.log(scoresArray);
    }

    let bff = 0;
    let scoreCompare = 50;
    for (let i = 0; i < scoresArray.length; i++) {
      if (scoresArray[i] <= scoreCompare) {
        scoreCompare = scoresArray[i];
        bff = i;
      }
    }
    // console.log(bookCharacter[bff]);
    res.json(bookCharacter[bff]);

    // const characterMatch = {
    //   name: '',
    //   photo: '',
    //   friendDifference: 5000,
    // };

    // const userData = req.body;
    // const userScores = userData.scores;

    // let totalDifference = 0;

    // for (let i = 0; i < bookCharacter.length; i++) {
    //   for (let j = 0; j < bookCharacter[i].scores[j]; j++) {
    //     totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(bookCharacter[i].scores[j]));
    //     console.log(totalDifference);
    //     if (totalDifference <= characterMatch.friendDifference) {
    //       characterMatch.name = bookCharacter[i].name;
    //       characterMatch.photo = bookCharacter[i].photo;
    //       characterMatch.friendDifference = totalDifference;
    //     }
    //   }
    // }
    // res.json(characterMatch);
  });
};
