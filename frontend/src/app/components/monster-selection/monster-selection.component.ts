import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monster-selection',
  templateUrl: './monster-selection.component.html',
  styleUrls: ['./monster-selection.component.css']
})
export class MonsterSelectionComponent implements OnInit {

  monsters = ['Goblin', 'Hobgoblin',
            'Knight', 'Tarrasque'];
  submitted = false;

  onSubmit(){ this.submitted = true; }

  ngOnInit() {
  }

}
