class Monster {

	constructor(monsterObject) {
		if(monsterObject == undefined) { }
		else{
			this.name = monsterObject.name;
			this.hit_points = monsterObject.hit_points;
			this.armor_class = monsterObject.armor_class;
			this.strength = monsterObject.strength;
			this.dexterity = monsterObject.dexterity;
			this.constitution = monsterObject.constitution;
			this.intelligence = monsterObject.intelligence;
			this.wisdom = monsterObject.wisdom;
			this.charisma = monsterObject.charisma;
			this.strMod = this.getAbilityModifier(this.strength);
			this.dexMod = this.getAbilityModifier(this.dexterity);
			this.conMod = this.getAbilityModifier(this.constitution);
			this.intMod = this.getAbilityModifier(this.intelligence);
			this.wisMod = this.getAbilityModifier(this.wisdom);
			this.chaMod = this.getAbilityModifier(this.charisma);
			this.actions = monsterObject.actions;
			this.challenge_rating = monsterObject.challenge_rating;
			this.initiative = this.getInitiative();
		}
	}
	
	//simulate rolling a d20 and adding dex for battle initiative
	getInitiative(){
		return Math.floor(Math.random() * 20) + 1 + this.dexMod;
	}
	
	getAbilityModifier(abilityScore){
		return Math.floor((abilityScore-10)/2);
	}
	
	setTeam(team){
		this.team = team;
	}
	
}

module.exports = Monster;