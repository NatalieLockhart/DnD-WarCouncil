var Monster = require('../models/monster.js');

//this method parses a JSON list of monsters into a list of monster objects
exports.parse = function(monsterList){
  if(monsterList == undefined) { return null; }
  var parsedMonsterList = [];
  for(var i = 0; i < monsterList.length; i++){
	parsedMonsterList.push(new Monster(monsterList[i].name, parseInt(monsterList[i].hit_points), monsterList[i].description, 
	  monsterList[i].stats, monsterList[i].weapons, monsterList[i].actions, monsterList[i].challenge_rating));
  }
  return parsedMonsterList;
}
