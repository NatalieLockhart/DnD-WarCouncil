
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
			//later this will need to be more in depth - a target with identical properties as the attacker will not be selected
			if (monsterList[i].name != attacker.name){
				return monsterList[i];
			}
		}
		return;
	}
}

module.exports = dungeonMaster;