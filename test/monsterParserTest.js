var Monster = require('../models/monster.js');
var monsterParser = require('../functions/monsterParser.js');
var mockJSONMonsterList = require('./mockJSONMonsterList.js');
var expect = require('chai').expect;

describe('monsterParser.parse(monsterList)', function (){	
	it('should return null if passed an undefined monsterList', function () {
		var result = monsterParser.parse(undefined);
		expect(result).to.be.null;
	});
});

