
//the goal is for this class to provide some simple AI for battles in the future
class dungeonMaster {
	constructor(difficulty) {
		this.AILevel = difficulty;
	}
	
	pickRandomMove(monster){
		var randomMove = Math.floor(Math.random() * monster.actions.length);
		return monster.actions[randomMove];
	}
}

module.exports = dungeonMaster;