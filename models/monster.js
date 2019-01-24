class Monster { 
	constructor(name, description, stats, weapons, actions, challenge_rating) {
		this.name = name;
		this.description = description;
		this.stats = stats;
		this.weapons = weapons;
		this.actions = actions;
		this.challenge_rating = challenge_rating;
	}
	
}

module.exports = Monster;