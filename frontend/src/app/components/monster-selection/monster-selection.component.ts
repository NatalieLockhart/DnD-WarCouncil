import { Component, OnInit } from '@angular/core';
import { ResultsService } from '../../services/results.service';
import { Monster } from '../../models/monster';
import { BattleResults } from 'src/app/models/battle-results';
import { Action } from '../../models/action';

@Component({
  selector: 'app-monster-selection',
  templateUrl: './monster-selection.component.html',
  styleUrls: ['./monster-selection.component.css']
})
export class MonsterSelectionComponent implements OnInit {

  constructor(private resultsService: ResultsService) { }

  monsters = ['Goblin', 'Hobgoblin',
            'Knight', 'Tarrasque'];
  model = new Monster();
  model1 = new Monster();
  battleResults = new BattleResults();


  onSubmit(){ 
    this.resultsService.simulateBattle(this.model, this.model1).subscribe(
      data => {this.battleResults.winningTeam = data.winningTeam, this.battleResults.setUpActionList(data.actionList)},
      err => console.error(err)
    );
  }

  get diagnostic() { return JSON.stringify(this.model); }

  ngOnInit() {
  }

}
