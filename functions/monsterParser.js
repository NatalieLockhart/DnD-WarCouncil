var Monster = require('../models/monster.js');
var MonsterController = require('../controllers/monsterController.js');

var monsterController = new MonsterController();
var parsedMonsterList = [];

//this method parses a JSON list of monsters into a list of monster objects
exports.parse = function(db, monsterList){
  if(monsterList == undefined) { return null; }

  parsedMonsterList = [];
  return setUpMonstersArray(db,monsterList).then(data => {
	  for(var f = 0; f < parsedMonsterList.length; f++){
	    parsedMonsterList[f].setTeam(monsterList[f].team);
	  }
	  return parsedMonsterList;
  });

}

function setUpMonstersArray(db, monsterList){
	return monsterController.getMonsters(db, monsterList).then(data => {
	for (var a = 0; a < data.length; a++){
		monster = new Monster(data[a]);
		parsedMonsterList.push(monster);
	}
  });
}
