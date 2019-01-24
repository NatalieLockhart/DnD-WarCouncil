var monster = require('../models/monster.js');
var dice = require('../models/dice.js');
var action = require('../models/action.js');
var dungeonMaster = require('./dungeonMaster.js');

//this class will orchestrate battles and return the results 
class combatController {
	constructor() {}
	
	simulateFight(monsterList){
	  return (monsterList[0]);
	}
	
}

module.exports = combatController;