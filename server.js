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

// Make our db accessible to our router
app.use(function(req,res,next){
    req.db = db;
    next();
});

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/monsters/:monster', function(req, res) {
	mController.getMonster(req.db, req.params.monster).then(data => {
		res.send(new Monster(data[0]));
	});
});

app.post("/simulate", function(request, response) {
	   monsterParser.parse(request.db, request.body).then(data => {
	     response.send(JSON.stringify(cController.simulateFight(data)));
	   });
 });

app.listen(port, () => console.log(`Node API is listening on port ${port}!`));