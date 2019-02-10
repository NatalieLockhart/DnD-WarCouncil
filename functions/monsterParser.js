var Monster = require('../models/monster.js');
var MonsterController = require('../controllers/monsterController.js');

var monsterController = new MonsterController();
var parsedMonsterList = [];

//this method parses a JSON list of monsters into a list of monster objects
exports.parse = function(db, monsterList){
  if(monsterList == undefined) { return null; }
  
  //we need to sort the monster list alphabetically because mongoDB returns results alphabetically
  //this way, the team numbers will match up with the right monster
  monsterList.sort(function(a,b){return a.name > b.name});

  parsedMonsterList = [];
  return setUpMonstersArray(db,monsterList).then(data => {
	  
	  for(var f = 0; f < parsedMonsterList.length; f++){
	    parsedMonsterList[f].setTeam(monsterList[f].team);
	  }
	  renameDuplicates(parsedMonsterList);
	  return parsedMonsterList;
  });

}

function setUpMonstersArray(db, monsterList){
	return monsterController.getMonsters(db, monsterList).then(data => {
	for (var a = 0; a < monsterList.length; a++){
		monster = new Monster(data.find(function(element) {
			return element.name == monsterList[a].name;
		}));
		parsedMonsterList.push(monster);
	}
  });
}

//we need to go through the monsterList (which has been sorted alphabetically at this point) and rename any duplicate monsters
function renameDuplicates(monsterList){
	var duplicateCount = 0;
	for (var b = 1; b < monsterList.length; b++){
		if(monsterList[b].name == monsterList[b-1].name.replace(/[0-9]/g, '')){
		  duplicateCount++;
		  monsterList[b].name += duplicateCount;
		}
		else{
			duplicateCount = 0;
		}
	}
}
