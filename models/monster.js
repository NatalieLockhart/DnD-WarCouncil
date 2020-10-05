class Monster {

	constructor(monsterObject) {
		if(monsterObject == undefined) { }
		else{
			this.name = monsterObject.name;
			this.hit_points = monsterObject.hit_points;
			this.armor_class = monsterObject.armor_class;
			this.strength = monsterObject.strength;
			this.dexterity = monsterObject.dexterity;
			this.constitution = monsterObject.constitution;
			this.intelligence = monsterObject.intelligence;
			this.wisdom = monsterObject.wisdom;
			this.charisma = monsterObject.charisma;
			this.strMod = this.getAbilityModifier(this.strength);
			this.dexMod = this.getAbilityModifier(this.dexterity);
			this.conMod = this.getAbilityModifier(this.constitution);
			this.intMod = this.getAbilityModifier(this.intelligence);
			this.wisMod = this.getAbilityModifier(this.wisdom);
			this.chaMod = this.getAbilityModifier(this.charisma);
			this.actions = monsterObject.actions;
			this.challenge_rating = monsterObject.challenge_rating;
			this.initiative = this.getInitiative();
			this.isSpellcaster = this.isSpellcaster(monsterObject.special_abilities);
			this.spellSlots = [];
			this.cantripSpells = [];
			this.firstLevelSpells = [];
			this.secondLevelSpells = [];
			this.thirdLevelSpells = [];
			this.fourthLevelSpells = [];
			this.fifthLevelSpells = [];
			this.sixthLevelSpells = [];
			this.seventhLevelSpells = [];
			this.eighthLevelSpells = [];
			this.ninthLevelSpells = [];
			this.parseSpellsAndSpellSlots(monsterObject.special_abilities);
		}
	}
	
	//simulate rolling a d20 and adding dex for battle initiative
	getInitiative(){
		return Math.floor(Math.random() * 20) + 1 + this.dexMod;
	}
	
	getAbilityModifier(abilityScore){
		return Math.floor((abilityScore-10)/2);
	}
	
	setTeam(team){
		this.team = team;
	}
	
	//check if the user is a spellcaster by parsing the special_abilities array to see if a "Spellcasting" element exists 
	isSpellcaster(special_abilities){
		for(var i = 0; i < special_abilities.length; i++){
			if(special_abilities[i].name == "Spellcasting") {
				console.log(this.name + " is a spellcaster!");
				return true;
			}
		}
		return false;
	}
	
	//if the monster is a spellcaster, parse out all the spells it knows and put them in lists by level
	//also get the total number of spell slots per level
	parseSpellsAndSpellSlots(special_abilities){
		if(!this.isSpellcaster) return;
		
		var spellString = "";
		
		for(var i = 0; i < special_abilities.length; i++){
			if(special_abilities[i].name == "Spellcasting") {
				spellString = special_abilities[i].desc;
			}
		}
				
		var cantripString = spellString.substring(spellString.indexOf("Cantrips (at will): ")+20,spellString.Length);
		var cantripList = cantripString.substring(0, cantripString.indexOf("\n")).split(', ');
		for(var i = 0; i< cantripList.length; i++){
			this.cantripSpells.push(cantripList[i]);
		}
		
		var firstSpellsString = cantripString.substring(cantripString.indexOf("1st level (")+21,cantripString.Length);
		var firstLevelSpellsList = firstSpellsString.substring(0, firstSpellsString.indexOf("\n")).split(', ');
		for(var i = 0; i< firstLevelSpellsList.length; i++){
			this.firstLevelSpells.push(firstLevelSpellsList[i]);
		}
		
		var secondSpellsString = firstSpellsString.substring(firstSpellsString.indexOf("2nd level (")+21,firstSpellsString.Length);
		var secondLevelSpellsList = secondSpellsString.substring(0, secondSpellsString.indexOf("\n")).split(', ');
		for(var i = 0; i< secondLevelSpellsList.length; i++){
			this.secondLevelSpells.push(secondLevelSpellsList[i]);
		}
		
		var thirdSpellsString = secondSpellsString.substring(secondSpellsString.indexOf("3rd level (")+21,secondSpellsString.Length);
		var thirdLevelSpellsList = thirdSpellsString.substring(0, thirdSpellsString.indexOf("\n")).split(', ');
		for(var i = 0; i< thirdLevelSpellsList.length; i++){
			this.thirdLevelSpells.push(thirdLevelSpellsList[i]);
		}
		
		var fourthSpellsString = thirdSpellsString.substring(thirdSpellsString.indexOf("4th level (")+21,thirdSpellsString.Length);
		var fourthLevelSpellsList = fourthSpellsString.substring(0, fourthSpellsString.indexOf("\n")).split(', ');
		for(var i = 0; i< fourthLevelSpellsList.length; i++){
			this.fourthLevelSpells.push(fourthLevelSpellsList[i]);
		}
		
		var fifthSpellsString = fourthSpellsString.substring(fourthSpellsString.indexOf("5th level (")+21,fourthSpellsString.Length);
		var fifthLevelSpellsList = fifthSpellsString.substring(0, fifthSpellsString.indexOf("\n")).split(', ');
		for(var i = 0; i< fifthLevelSpellsList.length; i++){
			this.fifthLevelSpells.push(fifthLevelSpellsList[i]);
		}
		
		var sixthSpellsString = fifthSpellsString.substring(fifthSpellsString.indexOf("6th level (")+21,fifthSpellsString.Length);
		var sixthLevelSpellsList = sixthSpellsString.substring(0, sixthSpellsString.indexOf("\n")).split(', ');
		for(var i = 0; i< sixthLevelSpellsList.length; i++){
			this.sixthLevelSpells.push(sixthLevelSpellsList[i]);
		}
		
		var seventhSpellsString = sixthSpellsString.substring(sixthSpellsString.indexOf("7th level (")+21,sixthSpellsString.Length);
		var seventhLevelSpellsList = seventhSpellsString.substring(0, seventhSpellsString.indexOf("\n")).split(', ');
		for(var i = 0; i< seventhLevelSpellsList.length; i++){
			this.seventhLevelSpells.push(seventhLevelSpellsList[i]);
		}
		
		var eighthSpellsString = seventhSpellsString.substring(seventhSpellsString.indexOf("8th level (")+21,seventhSpellsString.Length);
		var eighthLevelSpellsList = eighthSpellsString.substring(0, eighthSpellsString.indexOf("\n")).split(', ');
		for(var i = 0; i< eighthLevelSpellsList.length; i++){
			this.eighthLevelSpells.push(eighthLevelSpellsList[i]);
		}
		
		var ninthSpellsString = eighthSpellsString.substring(eighthSpellsString.indexOf("9th level (")+21,eighthSpellsString.Length);
		var ninthLevelSpellsList = ninthSpellsString.substring(0, ninthSpellsString.indexOf("\n")).split(', ');
		for(var i = 0; i< ninthLevelSpellsList.length; i++){			
			this.ninthLevelSpells.push(ninthLevelSpellsList[i]);
		}
		
		//push the spell slot totals into the spellSlots array. Make sure that if the xLevelSpellsList array had only 1 element, and it was an empty string, we push 0 instead of 1
		this.spellSlots.push((this.cantripSpells.length == 0 && cantripSpellsList[0] == "") ? 0 : this.cantripSpells.length);
		this.spellSlots.push((this.firstLevelSpells.length == 1 && firstLevelSpellsList[0] == "") ? 0 : this.firstLevelSpells.length);
		this.spellSlots.push((this.secondLevelSpells.length == 1 && secondLevelSpellsList[0] == "") ? 0 : this.secondLevelSpells.length);
		this.spellSlots.push((this.thirdLevelSpells.length == 1 && thirdLevelSpellsList[0] == "") ? 0 : this.thirdLevelSpells.length);
		this.spellSlots.push((this.fourthLevelSpells.length == 1 && fourthLevelSpellsList[0] == "") ? 0 : this.fourthLevelSpells.length);
		this.spellSlots.push((this.fifthLevelSpells.length == 1 && fifthLevelSpellsList[0] == "") ? 0 : this.fifthLevelSpells.length);
		this.spellSlots.push((this.sixthLevelSpells.length == 1 && sixthLevelSpellsList[0] == "") ? 0 : this.sixthLevelSpells.length);
		this.spellSlots.push((this.seventhLevelSpells.length == 1 && seventhLevelSpellsList[0] == "") ? 0 : this.seventhLevelSpells.length);
		this.spellSlots.push((this.eighthLevelSpells.length == 1 && eighthLevelSpellsList[0] == "") ? 0 : this.eighthLevelSpells.length);
		this.spellSlots.push((this.ninthLevelSpells.length == 1 && ninthLevelSpellsList[0] == "") ? 0 : this.ninthLevelSpells.length);		
				
		for(var i = 0; i < this.firstLevelSpells.length; i++){
			console.log("first level spells - " + i + " :" + this.firstLevelSpells[i]);	
		}
		
		for(var i = 0; i < this.spellSlots.length; i++){
			console.log("level " + i + " spell slots: " + this.spellSlots[i]);
		}
	}
	
}

module.exports = Monster;