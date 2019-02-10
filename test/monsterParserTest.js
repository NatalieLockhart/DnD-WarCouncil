var Monster = require('../models/monster.js');
var monsterParser = require('../functions/monsterParser.js');
var mockJSONMonsterList = require('./mockJSONMonsterList.js');
var expect = require('chai').expect;

describe('monsterParser.parse(monsterList)', function (){
	it('should return a list of Monster objects when given a list of JSON monsters', function () {
		
		//1. ARRANGE
		var mockMonster = new Monster(mockJSONMonsterList[0]);
		
		//2. ACT
		var result = monsterParser.parse(mockJSONMonsterList);
		
		//set the initiatives to be the same because initiative is randomly generated when a Monster() is created
		mockMonster.initiative = 1;
		result[0].initiative = 1;
		
		//3. ASSERT
		expect(result[0]).to.deep.equal(mockMonster);
	});
	
	it('should return null if passed an undefined monsterList', function () {
		var result = monsterParser.parse(undefined);
		expect(result).to.be.null;
	});
});

