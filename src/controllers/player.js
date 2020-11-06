const PawnObject = require('./pawnObject');

class Player extends PawnObject {
  constructor() {
    super();
    console.log('Player initiated');
  }
}

module.exports = Player;
