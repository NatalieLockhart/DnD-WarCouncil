const Monster = require('../models/monster.js');

class monsterController{
	constructor() {}
	
	//get a single monster from the database
	getMonster(db, monster){
	  var monsters = db.get('monsters');
	  return monsters.find({name: monster}, function(e,docs){
		  return docs;
	  });
	}
	
	//get multiple monsters from the database
	getMonsters(db, monsterList){
	  var monsters = db.get('monsters');
	  var monsterNames = [];
	  for (var c = 0; c < monsterList.length; c++){
		  monsterNames.push(monsterList[c].name);
	  }
	  
	  return monsters.find({name: {$in: monsterNames}}, function(e,docs){
		  return docs;
	  });
	}
	
	//get names of all monsters from the database
	getMonsterNameList(db){
	  var monsters = db.get('monsters');
	  return monsters.find({},{"name":1,"_id":0});
	}
}

module.exports = monsterController;