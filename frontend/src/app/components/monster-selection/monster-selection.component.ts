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
  
  onAddMonster(){
    console.warn(this.monsterForm.value);
  }


  onSubmit(){ 
    console.log(this.model.name + " " + this.model.team);
    this.resultsService.simulateBattle(this.model, this.model1).subscribe(
      data => {this.battleResults.winningTeam = data.winningTeam, this.battleResults.setUpActionList(data.actionList)},
      err => console.error(err)
    );    
  }

  get diagnostic() { return JSON.stringify(this.model); }

  get teams(){
    return this.monsterForm.get('teams') as FormArray;
  }

  addMonster(team: FormArray) {
    let monsterArray = team.get('monsters') as FormArray;
    monsterArray.push(this.fb.group({
      monsterName: ['']
    }));
  }

  addTeam(){
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

  ngOnInit() {
    this.resultsService.getMonsterNameList().subscribe(
      data => {this.monsterNameList = data as string[]},
      err => console.error(err)
    );
  }

}
