var Monster = require('../models/monster.js');
var monsterParser = require('../functions/monsterParser.js');
var mockJSONMonsterList = require('./mockJSONMonsterList.js');
var expect = require('chai').expect;

describe('monsterParser.parse(monsterList)', function (){
	it('should return a list of Monster objects when given a list of JSON monsters', function () {
		
		//1. ARRANGE
		var move1 = {
			name:"Shortbow",
			desc:"Ranged Weapon Attack: +4 to hit, range 80/320 ft., one target. Hit: 5 (1d6 + 2) piercing damage.",
			attack_bonus:4,
			damage_dice:"1d6",
			damage_bonus:2
		};
		var move2 = {
			name:"Scmitar",
			desc:"Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) slashing damage.",
			attack_bonus:4,
			damage_dice:"1d6",
			damage_bonus:2
		};
		var mockMonster = new Monster("Tarrasque", 800, "it\'s a tarrasque", [], "weaponsHere", [move1, move2], "100");
		
		//2. ACT
		var result = monsterParser.parse(mockJSONMonsterList.monsterList);
		
		//3. ASSERT
		expect(result[0]).to.deep.equal(mockMonster);
	});
	
	it('should return null if passed an undefined monsterList', function () {
		var result = monsterParser.parse(undefined);
		expect(result).to.be.null;
	});
});

