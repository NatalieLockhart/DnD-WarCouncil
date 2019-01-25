var MockAdapter = require('axios-mock-adapter');
var axios = require('axios');
var expect = require('chai').expect;
var Monster = require('../models/monster.js');
var monsterController = require('../controllers/monsterController.js');
var mockOpen5eAPIResponse = require('./mockOpen5eAPIResponse.js');

var mController = new monsterController();

describe('monsterController.getMonster(res, monster)', function (){
	it('should return a monster object (mocked)', function () {
		
		//1. ARRANGE
		var result1 = new Monster(mockOpen5eAPIResponse);
		var mock = new MockAdapter(axios);
		mock.onGet('https://api-beta.open5e.com/monsters/testcall/').reply(200, mockOpen5eAPIResponse);
			 
		//2. ACT
		mController.getMonster("", "testcall").then(function(response) {
			//set the initiatives to be the same because they are randomly generated on Monster() create
			result1.initiative = response.initiative;
			
			//3. ASSERT
			expect(result1).to.deep.equal(response);
		})
		.catch(error => { 
			console.log(error);
		});
		
		
	});
});