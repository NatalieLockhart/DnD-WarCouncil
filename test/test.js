var expect = require('chai').expect;

describe('test', function (){
	it('should return true', function () {
		
		//1. ARRANGE
		var result1 = true;
		
		//2. ACT
		var result2 = true;
		
		//3. ASSERT
		expect(result1).to.equal(result2);
	});
});