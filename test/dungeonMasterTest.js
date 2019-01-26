var DungeonMaster = require('../controllers/dungeonMaster.js');
var monsterParser = require('../functions/monsterParser.js');
var Monster = require('../models/monster.js');
var expect = require('chai').expect;
var mockJSONMonsterList = require('./mockJSONMonsterList.js');

var dungeonMaster = new DungeonMaster("easy");

describe('dungeonMaster.pickRandomMove(monster)', function (){
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

describe('dungeonMaster.determineTarget(attacker, monsterList)', function (){
	it('should return a target monster from the monsterList that is different than the attacker', function () {
		
		//1. ARRANGE				
		var mockMonster = new Monster(mockJSONMonsterList.monsterList[0]);
		var mockMonster1 = new Monster(mockJSONMonsterList.monsterList[1]);
		var monsterList = monsterParser.parse(mockJSONMonsterList.monsterList);
		
		//2. ACT
		var result = dungeonMaster.determineTarget(mockMonster, monsterList);
		
		//set the initiatives to be the same because they're randomly generated
		result.initiative = mockMonster1.initiative;
		
		//3. ASSERT
		expect(result).to.deep.equal(mockMonster1);
	});
});