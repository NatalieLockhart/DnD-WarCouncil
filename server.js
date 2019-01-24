var cors = require('cors');
var express = require('express');
var app = express();    
var axios = require('axios');
var monsterController = require('./controllers/monsterController.js');
  
var mController = new monsterController(axios); 

const port = 3000;
app.use(cors());

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/monsters/:monster', function(req, res) {
	mController.getMonster(res, req.params.monster).then(data => {
		res.send(data);
	})
	
});

app.listen(port, () => console.log(`Node API is listening on port ${port}!`));