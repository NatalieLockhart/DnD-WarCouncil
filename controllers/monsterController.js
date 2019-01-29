const Monster = require('../models/monster.js');

class monsterController{
	constructor() {}
	
	getMonster(db, monster){
	  var monsters = db.get('monsters');
	  return monsters.find({name: monster}, function(e,docs){
		  return docs;
	  });
	}
	
	getMonsters(db, monsterList){
	  var monsters = db.get('monsters');
	  var monsterNames = [];
	  for (var c = 0; c < monsterList.length; c++){
		  monsterNames.push(monsterList[c].name);
	  }
	  
	  //return monsters.find({name: {$in: ["Goblin","Hobgoblin"]}}, function(e,docs){
	  return monsters.find({name: {$in: monsterNames}}, function(e,docs){
		  return docs;
	  });
	}
}

module.exports = monsterController;