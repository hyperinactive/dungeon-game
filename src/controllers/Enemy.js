const PawnObject = require('./pawnObject');

class Enemy extends PawnObject {
  constructor() {
    super();
    console.log('Enemy initiated');
    this.hp = 1;
  }
}

module.exports = Enemy;
