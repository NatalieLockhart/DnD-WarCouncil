var monster = require('../models/monster.js');
var Dice = require('../models/dice.js');
var Action = require('../models/action.js');
var DungeonMaster = require('./dungeonMaster.js');

var dungeonMaster = new DungeonMaster("normal");
var dice = new Dice();

//this class will orchestrate battles and return the results 
class combatController {
	constructor() {}
	
	simulateFight(monsterList){
	  this.getInitiativeOrder(monsterList);
	  var actionArray = [];
	  var i = 0;
  
	  while(this.continueCombat(monsterList)){
		if(this.entityCanAct(monsterList[i])){
		  var attacker = monsterList[i];
		  var target = dungeonMaster.determineTarget(attacker, monsterList);
		  var attack = dungeonMaster.pickRandomMove(attacker);
		  var action = new Action(attacker, "attacks", target, attack);
			
		  if(this.attackRollsAreSuccessful(attacker, attack, target)){
			var damageDealt = this.dealDamage(target, attack);
			action.recordHit(true);
			action.recordDamage(damageDealt);
		  }
		  else{
			action.recordHit(false);
			action.recordDamage(0);
		  }
	  }
	  
	  action.finalize();
	  actionArray.push(action);
	  i++;
	  if(i > monsterList.length-1) {i = 0};
    }  	  
	
	for(var d = 0; d < actionArray.length; d++){
	  console.log("Action " + (d+1) + ": " + actionArray[d].finalStatement);
	}
	
	return this.determineVictoriousTeam(monsterList);
  }
	
	//check if there is more than one team with a living monster on it - if so, the battle is ongoing
	continueCombat(monsterList){
	  var livingTeam = 0;
	  for(var a = 0; a < monsterList.length; a++){
		  if(monsterList[a].hit_points > 0){
			  if(livingTeam == 0){
			    livingTeam = monsterList[a].team;
			  }
			  if(monsterList[a].team != livingTeam){
			    return true;
			  }
		  }
	  }
	  return false;
	}
	
	//for now, this is its own function until I figure out if extra logic will be needed. If not, i'll move it into the main simulateBattle() method
	getInitiativeOrder(monsterList){
		monsterList.sort(function(a,b){return b.initiative - a.initiative});
		return;
	}
	
	//this will be a much more complicated check later - is the entity down, charmed, asleep, exhausted? for now, they can act if they aren't dead.
	entityCanAct(entity){
		if (entity.hit_points > 0){
			return true;
		}
		return false;
	}
	
	//check if attack rolls break through the target's AC
	//many attacks gain bonuses to hit based on the attacker's stats, so it should be passed in. however, we'll worry about that later
	//many attacks also don't have specific dice rolls to hit, so we'll have to worry about that later too. for now, we'll just ignore an attack like that
	attackRollsAreSuccessful(attacker, attack, target){
		if(attack.damage_dice == undefined) { return false; }
		if(dice.rollD20() + attack.attack_bonus > target.armor_class){
			return true;
		}
		
		return false;
	}
	
	//if the target can roll to save, do so here. otherwise roll the attack die's damage or mitigated damage. 
	//later on, we will need to keep statuses and resistances in mind in this method.
	dealDamage(target, attack){
	  var damageDiceString = attack.damage_dice.split('d');
	  var numberOfDice = damageDiceString[0];
	  var typeOfDice = damageDiceString[1];
	  var damage = parseInt(attack.damage_bonus);
	  
	  for (var b = 0; b < numberOfDice; b++){
	    damage += dice.diceParser(typeOfDice);
	  }
	  
	  target.hit_points -= damage;
	  return damage;
	}

	//find the first surviving monster and return its team number.
	//all monsters from other teams should have been defeated by now
	determineVictoriousTeam(monsterList){
		for(var c = 0; c < monsterList.length; c++){
			if(monsterList[c].hit_points > 0) {return monsterList[c].team};
		}
		return monsterList[0].team;
	}		
}

module.exports = combatController;