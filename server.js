var cors = require('cors');
var express = require('express');
var app = express();    
var monsterController = require('./controllers/monsterController.js');
var Monster = require('./models/monster.js');
var combatController = require('./controllers/combatController.js');
var monsterParser = require('./functions/monsterParser.js');
var mongo = require('mongodb');
var monk = require('monk');
  
var db = monk('localhost:27017/monsters');
var mController = new monsterController(); 
var cController = new combatController();

const port = 3000;
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/monsters/:monster', function(req, res) {
	mController.getMonster(req.params.monster).then(data => {
		res.send(new Monster(data[0]));
	});
});

app.get('/monsters', function(req,res){
	monsterParser.getMonsterNameList().then(data => {
		res.send(data);
	});
});

app.post("/simulate", function(req, res) {
	   monsterParser.parse(req.body).then(data => {
	     res.send(JSON.stringify(cController.simulateFight(data)));
	   });
 });

app.listen(port, () => console.log(`Node API is listening on port ${port}!`));