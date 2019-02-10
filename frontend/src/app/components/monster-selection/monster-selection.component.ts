import { Component, OnInit } from '@angular/core';
import { ResultsService } from '../../services/results.service';
import { Monster } from '../../models/monster';

@Component({
  selector: 'app-monster-selection',
  templateUrl: './monster-selection.component.html',
  styleUrls: ['./monster-selection.component.css']
})
export class MonsterSelectionComponent implements OnInit {

  constructor(private resultsService: ResultsService) { }

  monsters = ['Goblin', 'Hobgoblin',
            'Knight', 'Tarrasque'];
  submitted = false;
  model = new Monster("Goblin", 1);
  model1 = new Monster("Tarrasque", 2);


  onSubmit(){ this.submitted = true;
    this.resultsService.simulateBattle(this.model, this.model1).subscribe(
      //data => {this.forecast = data, this.tempPopulated = true},
      //err => console.error(err)
    );
  }

  get diagnostic() { return JSON.stringify(this.model); }

  ngOnInit() {
  }

}
