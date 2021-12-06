const Potion = require('./Potion');
const Character = require('./Character');

class Player extends Character {

    constructor(name = '') {
        // call parent constructor here:
        super(name);
    this.inventory = [new Potion('health'), new Potion()];
    }

    //inherit prototype methods from Character here:
    // Player.prototype = Object.create(Character.prototype);
    
    // returns a object with various player properties
    // Player.prototype.getStats = function() {
    //     return {
    //         potions: this.inventory.length,
    //         health: this.health,
    //         strength: this.strength,
    //         agility: this.agility
    //     };
    // };
    getStats() {
        return {
            potions: this.inventory.length,
            health: this.health,
            strength: this.strength,
            agility: this.agility
        };
    }

    // returns the inventory array or false if empty
    // Player.prototype.getInventory = function() {
    //     if (this.inventory.length) {
    //         return this.inventory;
    //     }

    //         return false;
    // };

        getInventory() {
            if (this.inventory.length) {
                return this.inventory;
            }
            return false;
        }

    // Player.prototype.addPotion = function(potion) {
    //     this.inventory.push(potion);
    // };
        addPotion(potion) {
            this.inventory.push(potion);
        }

    // Player.prototype.usePotion = function(index) {
    //     const potion = this.getInventory().splice(index, 1)[0];

        usePotion(index) {

        const potion = this.inventory.splice(index, 1)[0];

        switch (potion.name) {
            case 'agility':
            this.agility += potion.value;
            break;
            case 'health':
            this.health += potion.value;
            break;
            case 'strength':
            this.strength += potion.value;
            break;
            }
        }
    }

module.exports = Player;