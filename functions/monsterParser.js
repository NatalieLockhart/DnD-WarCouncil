var Monster = require('../models/monster.js');

//this method parses a JSON list of monsters into a list of monster objects
exports.parse = function(monsterList){
  if(monsterList == undefined) { return null; }
  var parsedMonsterList = [];
  for(var i = 0; i < monsterList.length; i++){
	parsedMonsterList.push(new Monster(monsterList[i]));
  }
  return parsedMonsterList;
}
