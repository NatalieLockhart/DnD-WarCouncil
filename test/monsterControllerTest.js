var expect = require('chai').expect;
var Monster = require('../models/monster.js');
var monsterController = require('../controllers/monsterController.js');
var mockOpen5eAPIResponse = require('./mockOpen5eAPIResponse.js');
var monk = require('monk');
//var db = monk('localhost:27017/monsters');

var url = 'mongodb://localhost:27017/monsters';
var mController = new monsterController();

describe('monsterController', function (){
	it('', function () {
		
		// //1. ARRANGE
		// var result2 = new Monster(mockOpen5eAPIResponse);
		// var collection = db.collection('monsters');
					 
		// //2. ACT
		// mController.getMonster(db, "Goblin").then(function(response) {
			// //set the initiatives to be the same because they are randomly generated on Monster() create
			// var result1 = new Monster(response[0]);
			// result2.initiative = result1.initiative;
			
			// //3. ASSERT
			// expect(result1).to.deep.equal(result2);
		// })
		// .catch(error => { 
			// console.log(error);
		// });
		
		
	});
});