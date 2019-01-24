var cors = require('cors');
var express = require('express');
var app = express();    
var axios = require('axios');
var monsterController = require('./controllers/monsterController.js');
var Monster = require('./models/monster.js');
var combatController = require('./controllers/combatController.js');
var monsterParser = require('./functions/monsterParser.js');
  
var mController = new monsterController(); 
var cController = new combatController();

const port = 3000;
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/monsters/:monster', function(req, res) {
	mController.getMonster(res, req.params.monster).then(data => {
		res.send(data);
	})
	
});

app.post("/simulate", function(request, response) {
		console.log(request.body.monsterList);
	   var parsedMonsters = monsterParser.parse(request.body.monsterList);
	   response.send(cController.simulateFight(parsedMonsters));
 });

app.listen(port, () => console.log(`Node API is listening on port ${port}!`));