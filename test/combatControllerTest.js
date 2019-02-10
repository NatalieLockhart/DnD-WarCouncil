var combatController = require('../controllers/combatController.js');
var Monster = require('../models/monster.js');
var monsterParser = require('../functions/monsterParser.js');
var mockJSONMonsterList = require('./mockJSONMonsterList.js');
var expect = require('chai').expect;

var cController = new combatController();

describe('combatController.simulateFight(monsterList)', function (){
	it('should return the number of the winning team when a list of Monster objects is passed to it', function () {
	
		//1. ARRANGE
		var monster1 = new Monster(mockJSONMonsterList[0]);
		monster1.setTeam(1);
		var monster2 = new Monster(mockJSONMonsterList[1]);
		monster2.setTeam(2);
		
		var monsterList = [monster1, monster2];
		var winningTeam = 2; //Team 2, the Tarrasque, who will always win
		
		//2. ACT
		var result = cController.simulateFight(monsterList);
		
		//3. ASSERT
		expect(result).to.equal(winningTeam);
	});
});

describe('combatController.continueCombat(monsterList)', function (){
	it('should return true when all monsters in the list have more than 0 health', function () {
	
		//1. ARRANGE
		var monsterList = [{hit_points: 10, team: 1}, {hit_points:11, team: 2}, {hit_points: 1, team:3}];
		
		//2. ACT
		var result = cController.continueCombat(monsterList);
		
		//3. ASSERT
		expect(result).to.be.true;
	});
	
	it('should return false when all monsters on one team have 0 health', function () {
	
		var monsterList = [{hit_points: 10, team: 1}, {hit_points:11, team: 1}, {hit_points: 0, team:2}, {hit_points:0, team:2}];
		
		//2. ACT
		var result = cController.continueCombat(monsterList);
		
		//3. ASSERT
		expect(result).to.be.false;
	});
	
	it('should return true when more than one team has at least one monster with health higher than 0', function () {
		//1. ARRANGE
		var monsterList = [{hit_points: 10, team: 1}, {hit_points:0, team: 1}, {hit_points:0, team:2}, {hit_points:1, team:2}];
		
		//2. ACT
		var result = cController.continueCombat(monsterList);
		
		//3. ASSERT
		expect(result).to.be.true;
	});
});


describe('getInitiativeOrder(monsterList)', function (){
	it('should sort the monster list from highest to lowest initiatives values', function () {
		//1. ARRANGE
		var monsterList = [{initiative: 0}, {initiative:1}, {initiative:2}];
		
		//2. ACT
		cController.getInitiativeOrder(monsterList);
		
		//3. ASSERT
		expect(monsterList[0].initiative).to.equal(2);
	});
});

describe('entityCanAct(monsterList[i])', function (){
	it('should return true if the passed Monster has health higher than 0', function () {
		//1. ARRANGE
		var mockMonster = {hit_points:1};
		
		//2. ACT
		var result = cController.entityCanAct(mockMonster);
		
		//3. ASSERT
		expect(result).to.be.true;
	});
	
	it('should return false if the passed Monster has health lower than or equal to 0', function () {
		//1. ARRANGE
		var mockMonster = {hit_points:0};
		
		//2. ACT
		var result = cController.entityCanAct(mockMonster);
		
		//3. ASSERT
		expect(result).to.be.false;
	});
});

describe('attackRollsAreSuccessful(attacker, attack, target)', function (){
	it('should return true if the attack roll is higher than the target\'s armor class', function () {
		//1. ARRANGE
		var mockTarget = { armor_class:0 };
		var attack = {
            "name": "Scimitar",
            "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) slashing damage.",
            "attack_bonus": 4,
            "damage_dice": "1d6",
            "damage_bonus": 2
        };
		
		//2. ACT
		var result = cController.attackRollsAreSuccessful("", attack, mockTarget);
		
		//3. ASSERT
		expect(result).to.be.true;
	});
	
	it('should return false if the attack roll is lower than the target\'s armor class', function () {
		//1. ARRANGE
		var mockTarget = { armor_class:1000 };
		var attack = {
            "name": "Scimitar",
            "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) slashing damage.",
            "attack_bonus": 4,
            "damage_dice": "1d6",
            "damage_bonus": 2
        };
		
		//2. ACT
		var result = cController.attackRollsAreSuccessful("", attack, mockTarget);
		
		//3. ASSERT
		expect(result).to.be.false;
	});
});

describe('dealDamage(target, attack)', function (){
	it('should do damage to the target and return the damage value', function () {
		//1. ARRANGE
		var mockMonster = {hit_points:100};
		var attack = {
            "name": "Scimitar",
            "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) slashing damage.",
            "attack_bonus": 4,
            "damage_dice": "1d6",
            "damage_bonus": 2
        };
		
		//2. ACT
		var result = cController.dealDamage(mockMonster, attack);
		
		//3. ASSERT
		expect((mockMonster.hit_points < 100) && (result >= 2)).to.be.true;
	});
});

describe('determineVictoriousTeam(monsterList)', function (){
	it('should determine the team that won the battle', function () {
		//1. ARRANGE
		var monsterList = [{hit_points:1, team:1}, {hit_points:0, team:2}];
		
		//2. ACT
		var result = cController.determineVictoriousTeam(monsterList);
		
		//3. ASSERT
		expect(result).to.equal(1);
	});
});