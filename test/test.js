var MockAdapter = require('axios-mock-adapter');
var axios = require('axios');
var expect = require('chai').expect;
var Monster = require('../models/monster.js');
var monsterController = require('../controllers/monsterController.js');

var mController = new monsterController();

describe('monsterController.getMonster(res, monster)', function (){
	it('should return a monster object with name "the strongest goblin" (mocked)', function () {
		
		//1. ARRANGE
		var result1 = new Monster("the strongest goblin", "it\'s a goblin",  [], "weaponsHere", "1000");
		var mock = new MockAdapter(axios);
		mock.onGet('https://api-beta.open5e.com/monsters/goblin/').reply(200, result1);
			 
		//2. ACT
		mController.getMonster("", "goblin").then(function(response) {
			//3. ASSERT
			expect(response.name).to.equal(result1.name);
		})
		.catch(error => { 
			console.log(error);
		});
		
		
	});
});