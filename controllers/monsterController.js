const Monster = require('../models/monster.js');

class monsterController{
	constructor() {}
	
	getMonster(db, monster){
	  var monsters = db.get('monsters');
	  return monsters.find({name: monster}, function(e,docs){
		 
	  });
	}
}

module.exports = monsterController;