
//the goal is for this class to provide some simple AI for battles in the future
class dungeonMaster {
	constructor(difficulty) {
		this.AILevel = difficulty;
	}
	
	pickRandomMove(monster){
	    var randomMove = Math.floor(Math.random() * monster.actions.length);
		return monster.actions[randomMove];
	}
	
	//later on, we will be more selective of the target, but for now, let's pick the first monster in the list that isn't the attacker.
	determineTarget(attacker, monsterList){
		for(var i = 0; i < monsterList.length; i++){
			//later this will need to be more in depth - a target will be selected based on aggro, challenge rating, closeness to death, etc.
			if (monsterList[i].team != attacker.team && monsterList[i].hit_points > 0){
				return monsterList[i];
			}
		}
		return;
	}
}

module.exports = dungeonMaster;