class Monster { 
	constructor(name, hit_points, description, stats, weapons, actions, challenge_rating) {
		this.name = name;
		this.hit_points = hit_points;
		this.description = description;
		this.stats = stats;
		this.weapons = weapons;
		this.actions = actions;
		this.challenge_rating = challenge_rating;
	}
	
}

module.exports = Monster;