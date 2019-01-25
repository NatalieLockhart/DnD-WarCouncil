var DungeonMaster = require('../controllers/dungeonMaster.js');
var Monster = require('../models/monster.js');
var expect = require('chai').expect;
var mockJSONMonsterList = require('./mockJSONMonsterList.js');

var dungeonMaster = new DungeonMaster("easy");

describe('dungeonMaster', function (){
	it('should return a random move from a monster\'s moveset', function () {
		
		//1. ARRANGE		
		var move1 = { 
		    name: "Scmitar", 
		    desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) slashing damage.",
            attack_bonus: 4,
            damage_dice: "1d6",
            damage_bonus: 2
		  };
		  
		var move2 = {
		    name: "Shortbow",
            desc: "Ranged Weapon Attack: +4 to hit, range 80/320 ft., one target. Hit: 5 (1d6 + 2) piercing damage.",
            attack_bonus: 4,
            damage_dice: "1d6",
            damage_bonus: 2
	      };
		
		var mockMonster = new Monster(mockJSONMonsterList.monsterList[0]);
		
		//2. ACT
		var result = dungeonMaster.pickRandomMove(mockMonster);
		
		//3. ASSERT
		expect(result.name == mockMonster.actions[0].name || result.name == mockMonster.actions[1].name).to.be.true;
		
		
	});
});