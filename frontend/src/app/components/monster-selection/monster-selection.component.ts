import { Component, OnInit } from '@angular/core';
import { ResultsService } from '../../services/results.service';
import { Monster } from '../../models/monster';
import { BattleResults } from 'src/app/models/battle-results';
import { FormBuilder, FormArray, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-monster-selection',
  templateUrl: './monster-selection.component.html',
  styleUrls: ['./monster-selection.component.css']
})
export class MonsterSelectionComponent implements OnInit {

  constructor(private resultsService: ResultsService, private fb: FormBuilder) { }

  apiObject: Monster[];
  monsterNameList = [];
  model = new Monster();
  model1 = new Monster();
  numberOfTeams = 1;
  battleResults = new BattleResults();
  monsterForm = this.fb.group({
    teams: this.fb.array([
      this.fb.group({
      teamNumber: [this.numberOfTeams],
      monsters: this.fb.array([
        this.fb.group({
          monsterName: [''],
        })
      ])
      })
    ])
  });

  parseMonsterForm(){
    this.apiObject = [];
    for(let team of this.monsterForm.value.teams){
      for(var i = 0; i < team.monsters.length; i++){
        this.apiObject.push({name: team.monsters[i].monsterName, team: team.teamNumber} as Monster);
      }
    }
  }

  onSubmit(isDetailed){ 
    this.removeWinningClass();
    this.parseMonsterForm();
    this.resultsService.simulateBattle(this.apiObject, isDetailed).subscribe(
      data => {this.battleResults.winningTeam = data.winningTeam, this.battleResults.setUpActionList(data.actionList), 
        document.getElementById("team" + this.battleResults.winningTeam).classList.add('winning-team'); },
      err => console.error(err)
    );   
  }

  get diagnostic() { return JSON.stringify(this.model); }

  get teams(){
    return this.monsterForm.get('teams') as FormArray;
  }

  //add a new monster to the given team's monster array
  addMonster(team: FormArray) {
    this.removeWinningClass();
    let monsterArray = team.get('monsters') as FormArray;
    monsterArray.push(this.fb.group({
      monsterName: ['']
    }));
  }

  //add a new team to the team array
  addTeam(){
    this.removeWinningClass();
    this.numberOfTeams++;
    this.teams.push(this.fb.group({
      teamNumber: [this.numberOfTeams],
      monsters: this.fb.array([
        this.fb.group({
          monsterName: ['']
        })
      ])
    }));
  }
  
  subtractTeam(){
	  this.removeWinningClass();
	  this.numberOfTeams--;
	  this.teams.pop();
	  
  }

  //remove the winning-team class from the team that won the last round. Reset the battle results
  removeWinningClass(){
    this.battleResults = new BattleResults();
    var elems = document.querySelectorAll(".winning-team");
    [].forEach.call(elems,function(el){
      el.classList.remove("winning-team");
    })
  }

  //get the list of all monster names to populate the monster dropdowns, and add a team to the teams array so we start with two
  ngOnInit() {
    this.resultsService.getMonsterNameList().subscribe(
      data => {this.monsterNameList = data as string[]},
      err => console.error(err)
    );
    this.addTeam();
  }

}
