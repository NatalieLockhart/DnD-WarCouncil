
//Simple class that simulates dice rolls. This should make it clear as to what type of die is being rolled in the code
class Dice {
	constructor () {}
	
	diceParser(diceType){
		switch(diceType){
		  case diceType = "20":
		    return this.rollD20();
		  case diceType = "12":
		    return this.rollD12();
		  case diceType = "10":
		    return this.rollD10();
		  case diceType = "8":
		    return this.rollD8();
		  case diceType = "6":
		    return this.rollD6();
		  default:
		    return this.rollD4();
		}
	}
	
	//returns a number between 1 and 20
	rollD20(){
	  return Math.floor(Math.random() * 20) + 1;
	}
	
	//returns a number between 1 and 12
	rollD12(){
	  return Math.floor(Math.random() * 12) + 1;
	}
	
	//returns a number between 1 and 10
	rollD10(){
	  return Math.floor(Math.random() * 10) + 1;
	}
	
	//returns a number between 1 and 8
	rollD8(){
	  return Math.floor(Math.random() * 8) + 1;
	}
	
	//returns a number between 1 and 6
	rollD6(){
	  return Math.floor(Math.random() * 6) + 1;
	}
	
	//returns a number betwen 1 and 4
	rollD4(){
	  return Math.floor(Math.random() * 4) + 1;	
	}
	
}

module.exports = Dice;