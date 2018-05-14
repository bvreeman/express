require('nodemon');

const bookCharacter = require('../data/friends');

module.exports = function(app) {
  app.get('/api/friends', function(req, res) {
    res.json(bookCharacter);
  });

  app.post('/api/friends', function(req, res) {
    const characterMatch = {
      name: '',
      photo: '',
      characterDifference: 0,
    };

    const userData = req.body;
    const userScores = userData.scores;

    let totalDifference = 0;

    for (let i = 0; i < bookCharacter.length; i++) {
      for (let j = 0; j < bookCharacter[i].scores[j]; j++) {
        totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(bookCharacter[i].scores[j]));
        if (totalDifference <= characterMatch.characterDifference) {
          characterMatch.name = bookCharacter[i].name;
          characterMatch.photo = bookCharacter[i].photo;
          characterMatch.characterDifference = totalDifference;
        }
      }
    }

    res.json(characterMatch);
  });
};
