var Action = require('../models/action.js');
var expect = require('chai').expect;

describe('action.recordHit(bool)', function (){
	it('should mark its hit property as true if the bool is true', function () {
	
		//1. ARRANGE
		var action = new Action("", "", "", "");
		
		//2. ACT
		action.recordHit(true);

		//3. ASSERT
		expect(action.hit).to.be.true;
	});
	
	it('should mark its hit property as false if the bool is false', function () {
	
		//1. ARRANGE
		var action = new Action("", "", "", "");
		
		//2. ACT
		action.recordHit(false);

		//3. ASSERT
		expect(action.hit).to.be.false;
	});
});

describe('action.recordDamage(damage)', function (){
	it('should mark its damage property as whatever the damage parameter is', function () {
	
		//1. ARRANGE
		var action = new Action("", "", "", "");
		
		//2. ACT
		action.recordDamage(8);

		//3. ASSERT
		expect(action.damage).to.equal(8);
	});
});

describe('action.finalize()', function (){
	it('should set its finalStatement property to a string that describes what happened (hits and deals damage)', function () {
	
		//1. ARRANGE
		var action = new Action({name: "stronger monster"}, "attacks", {name: "weaker monster"}, {name: "Wing Attack"});
		action.recordHit(true);
		action.recordDamage(10);
		
		//2. ACT
		action.finalize();

		//3. ASSERT
		expect(action.finalStatement).to.equal("stronger monster attacks weaker monster using Wing Attack. It hits, dealing 10 damage!");
	});
	
	it('should set its finalStatement property to a string that describes what happened (hits and deals no damage)', function () {
	
		//1. ARRANGE
		var action = new Action({name: "stronger monster"}, "attacks", {name: "weaker monster"}, {name: "Wing Attack"});
		action.recordHit(true);
		action.recordDamage(0);
		
		//2. ACT
		action.finalize();

		//3. ASSERT
		expect(action.finalStatement).to.equal("stronger monster attacks weaker monster using Wing Attack. It hits, but deals no damage.");
	});
	
	it('should set its finalStatement property to a string that describes what happened (does not hit)', function () {
	
		//1. ARRANGE
		var action = new Action({name: "stronger monster"}, "attacks", {name: "weaker monster"}, {name: "Wing Attack"});
		action.recordHit(false);
		action.recordDamage(0);
		
		//2. ACT
		action.finalize();

		//3. ASSERT
		expect(action.finalStatement).to.equal("stronger monster attacks weaker monster using Wing Attack. It misses!");
	});
});


