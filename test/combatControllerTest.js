var combatController = require('../controllers/combatController.js');
var Monster = require('../models/monster.js');
var expect = require('chai').expect;

var cController = new combatController();

describe('combatController.simulateFight(monsterList)', function (){
	it('should return a winner when a list of Monster objects is passed to it', function () {
		
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
		var mockMonster1 = new Monster("Tarrasque", 800, "it\'s a tarrasque", [], "weaponsHere", [move1, move2], "100");
		var mockMonster2 = new Monster("Hobgoblin", 20, "it\'s a hobgoblin", [], "weaponsHere", [move1,move2], "1");
		var monsterList = [mockMonster1, mockMonster2];
		
		//2. ACT
		var result = cController.simulateFight(monsterList);
		
		//3. ASSERT
		expect(result).to.deep.equal(mockMonster1);
	});
});