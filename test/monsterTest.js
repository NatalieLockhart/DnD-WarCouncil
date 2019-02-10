var Monster = require('../models/monster.js');
var mockJSONMonsterList = require('./mockJSONMonsterList.js');
var expect = require('chai').expect;

describe('monster.constructor(monsterObject)', function (){
	it('should return a new Monster object with no parameters set if monsterObject is null or undefined', function () {
		//1. ARRANGE
		
		//2. ACT
		var emptyMonster = new Monster();
		
		//3.ASSERT
		expect(emptyMonster.getAbilityModifier(20) != undefined).to.be.true;
	})

	it('should return a new Monster object populated from the monsterObject parameter', function () {
		
		//1. ARRANGE
		var move1 = {
			name:"Shortbow",
			desc:"Ranged Weapon Attack: +4 to hit, range 80/320 ft., one target. Hit: 5 (1d6 + 2) piercing damage.",
			attack_bonus:4,
			damage_dice:"1d6",
			damage_bonus:2
		};
		var move2 = {
			name:"Scimitar",
			desc:"Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) slashing damage.",
			attack_bonus:4,
			damage_dice:"1d6",
			damage_bonus:2
		};
		var mockMonster = new Monster({
			name: "Goblin", 
			hit_points: 7,   
			armor_class: 15,
			strength: 8,    
			dexterity: 14,   
			constitution: 10,   
			intelligence: 10,   
			wisdom: 8,    
			charisma: 8,    
			actions: [move2, move1], 
			challenge_rating: "1/4",
			team: 1
		});
		
		//2. ACT
		var result = new Monster(mockJSONMonsterList[0]);
		
		//set the initiatives to be the same because they are randomly generated
		result.initiative = 1;
		mockMonster.initiative = 1;
		
		//3. ASSERT
		expect(result).to.deep.equal(mockMonster);
	});
});	

describe('monster.getAbilityModifier(abilityScore)', function (){
	it('should return a correct ability modifier value when passed ', function () {
		
		//1. ARRANGE
		var dexMod = 4;  //valid ability scores for this mod are 18 and 19
		
		var monster = new Monster();
		
		//2. ACT
		var result1 = monster.getAbilityModifier(18);
		var result2 = monster.getAbilityModifier(19);
		
		//3. ASSERT
		expect(result1 == 4 && result2 == 4).to.be.true;
	});
});