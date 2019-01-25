const https = require('https');
const axios = require('axios');
const Monster = require('../models/monster.js');

class monsterController{
	constructor() {}
	
	getMonster(res, monster){
		return axios.get(`https://api-beta.open5e.com/monsters/${monster}/`)
		  .then(response => {
			var monster = new Monster(response.data);
			return monster;
		  })
	  .catch(error => { 
			console.log(error);
	  });
	}
}

module.exports = monsterController;