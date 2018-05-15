require('nodemon');

const bookCharacter = require('../data/friends');

module.exports = function(app) {
  app.get('/api/friends', function(req, res) {
    res.json(bookCharacter);
  });

  app.post('/api/friends', function(req, res) {
    const userScores = req.body.scores;
    let scoresArr;
    const match = {
      lowestNumber: undefined,
      index: undefined,
    };
    bookCharacter.forEach((char, i) => {
      scoresArr = [];
      let temp = 0;
      for (let j = 0; j < userScores.length; j++) {
        temp += Math.abs(parseInt(char.scores[j]) - parseInt(userScores[j]));
        scoresArr.push(temp);
      }
      if (match.lowestNumber === undefined || temp <= match.lowestNumber) {
        match.lowestNumber = temp;
        match.index = i;
      }

      // console.log(`This is match:${JSON.stringify(match)}`);
    });
    // for (let i = 0; i < bookCharacter.length; i++) {
    // }


    // let bff = 0;
    // let scoreCompare = 50;
    // for (let i = 0; i < scoresArr.length; i++) {
    //   if (scoresArr[i] <= scoreCompare) {
    //     scoreCompare = scoresArr[i];
    //     bff = i;
    //   }
    // }
    // console.log(bookCharacter[bff]);
    return res.json(bookCharacter[match.index]);

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
    //     totalDifference += Math.abs(parseInt(userScores[j]) -
    // parseInt(bookCharacter[i].scores[j]));
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
