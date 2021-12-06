const Character = require('./Character');
const Potion = require('./Potion');

// function Enemy(name, weapon) {
//     this.name = name;
//     this.weapon = weapon;
//     this.potion = new Potion();

//     this.health = Math.floor(Math.random() * 10 + 85);
//     this.strength = Math.floor(Math.random() * 5 + 5);
//     this.agility = Math.floor(Math.random() * 5 + 5);
//     };

//     Enemy.prototype = Object.create(Character.prototype);

//     Enemy.prototype.getDescription = function() {
//         return `A ${this.name} holding a ${this.weapon} has appeared!`;
//     };

    class Enemy extends Character {
        constructor(name, weapon) {
            super(name);

            this.weapon = weapon;
            this.name = name;

    // this.health = Math.floor(Math.random() * 10 + 95);
    // this.strength = Math.floor(Math.random() * 5 + 7);
    // this.agility = Math.floor(Math.random() * 5 + 7);

    // this.inventory = [new Potion('health'), new Potion()];
        }

        getDescription() {
            return `A ${this.name} holding a ${this.weapon} has appeared!`;
        }
    }
module.exports = Enemy;