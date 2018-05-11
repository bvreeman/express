
let bookCharacter = require('../data/friends');


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  app.get('/api/friends', function(req, res) {
    res.json(bookCharacter);
  });

  app.post('/api/friends', function(req, res) {
    if (bookCharacter.length < 5) {
      bookCharacter.push(req.body);
      res.json(true);
    }
  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  app.post('/api/clear', function() {
    // Empty out the arrays of data
    bookCharacter = [];

    console.log(bookCharacter);
  });
};
