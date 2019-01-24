
//This class holds information about things that happen during battles
class Action{
	constructor (target1, description, target2, weapon) {
		this.target1 = target1;
		this.target2 = target2;
		this.description = description;
		this.weapon = weapon;
	}
	
	recordDamage(damage){
		this.damage = damage;
	}	
}

module.exports = Action;