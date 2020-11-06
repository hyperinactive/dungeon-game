class PawnObject {
  constructor() {
    console.log('Pawn initiated');
    // hardcoded, will work for now
    this._name = 'Luigi'
    this._hp = 10;
    this._attack = 1;
    this._defense = 1;
    this._speed = 2;
  }

  isAlive() {
    return this.hp > 0;
  }

  // Getters

  get name() {
    return this._name;
  }
  get attack() {
    return this._attack;
  }
  get defense() {
    return this._defense;
  }
  get speed() {
    return this._speed;
  }

  // Setters

  set name(name) {
    this._name = name;
  }
  set hp(hp) {
    this._hp = hp;
  }
  set attack(attack) {
    this._attack = attack;
  }
  set defense(defense) {
    this._defense = defense;
  }
  set speed(speed) {
    this._speed = this.speed;
  }
}

module.exports = PawnObject;