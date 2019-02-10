import { Component, OnInit } from '@angular/core';
import { ResultsService } from '../../services/results.service';

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


  onSubmit(monster1, monster2){ this.submitted = true;
    this.resultsService.simulateBattle(monster1, monster2).subscribe(
      //data => {this.forecast = data, this.tempPopulated = true},
      //err => console.error(err)
    );
  }

  ngOnInit() {
  }

}
