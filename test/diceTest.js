var Dice = require('../models/dice.js');
var expect = require('chai').expect;

var dice = new Dice();

describe('dice', function (){
	it('should return a number between 1 and 20', function () {
		expect(dice.rollD20()).to.be.greaterThan(0).and.lessThan(21);	
	});
	
	it('should return a number between 1 and 12', function () {
		expect(dice.rollD12()).to.be.greaterThan(0).and.lessThan(13);
	});
	
	it('should return a number between 1 and 10', function () {
		expect(dice.rollD10()).to.be.greaterThan(0).and.lessThan(11);
	});
	
	it('should return a number between 1 and 8', function () {
		expect(dice.rollD8()).to.be.greaterThan(0).and.lessThan(9);
	});
	
	it('should return a number between 1 and 6', function () {
		expect(dice.rollD6()).to.be.greaterThan(0).and.lessThan(7);
	});
	
	it('should return a number between 1 and 4', function () {
		expect(dice.rollD4()).to.be.greaterThan(0).and.lessThan(5);
	});
	
});