const Player = require('./player');

let instance = null;

class GameInstance {
  constructor() {
    if (!instance) {
      console.log('Game initiated');
      return this;
    }
  }
}

exports.init = () => {
  console.log('Init ?');
  let gameInstance = new GameInstance();
  let player = new Player();
};
