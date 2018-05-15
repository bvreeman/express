require('nodemon');

// Attaches my friends.js file to this file
const bookCharacter = require('../data/friends');

// Gets the bookcharacters from friends.js file
module.exports = function(app) {
  app.get('/api/friends', function(req, res) {
    res.json(bookCharacter);
  });

  // Puts the answer for the survey on the DOM
  app.post('/api/friends', function(req, res) {
    const userScores = req.body.scores;
    let scoresArr;
    const match = {
      lowestNumber: undefined,
      index: undefined,
    };
    // Runs through the user's answers and compares them to the scores on friends.js
    bookCharacter.forEach((char, i) => {
      scoresArr = [];
      let temp = 0;
      for (let j = 0; j < userScores.length; j++) {
        temp += Math.abs(parseInt(char.scores[j]) - parseInt(userScores[j]));
        scoresArr.push(temp);
      }
      // goes through and finds the closest matching score from friends js to the user's scores from the survey
      if (match.lowestNumber === undefined || temp <= match.lowestNumber) {
        match.lowestNumber = temp;
        match.index = i;
      }

      // console.log(`This is match:${JSON.stringify(match)}`);
    });
    // puts the matching character on the DOM
    return res.json(bookCharacter[match.index]);
  });
};
