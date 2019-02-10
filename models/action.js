
//This class holds information about things that happen during battles
class Action{
	constructor (attacker, description, target, attack) {
		this.target1 = attacker.name;
		this.target2 = target.name;
		this.description = description;
		this.attack = attack.name;
	}
	
	recordDamage(damage){
		this.damage = damage;
	}	
	
	recordHit(bool){
		this.hit = bool;
	}
	
	recordKill(bool){
		this.kill = bool;
	}
	
	recordCrit(bool){
		this.crit = bool;
	}
	
	finalize(){
		this.finalStatement = `${this.target1} ${this.description} ${this.target2} using ${this.attack}. `;
		if(this.hit){
		  if(this.crit) { this.finalStatement += "It crits, "; }
		  else { this.finalStatement += "It hits, "; }
		  if(this.damage > 0){
		    this.finalStatement += `dealing ${this.damage} damage!`;
			if(this.kill){
				this.finalStatement += ` ${this.target2} has been felled!`;
			}
		  }
		  else{
		    this.finalStatement += "but deals no damage.";
		  }
		}
		else{
			this.finalStatement += "It misses!";
		}
	}
}

module.exports = Action;