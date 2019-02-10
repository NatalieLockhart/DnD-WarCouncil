import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  simulateURL: string = "http://localhost:3000/simulate/";
  getURL: string =  "http://localhost:3000/monster/";

  constructor(private http:HttpClient) { }

  mockData : any = { "monsterList" : [
    { "name": "Goblin", "team": 1}, 
    {"name": "Tarrasque", "team":2}
  ]};

  //call the Node API to get the results of the battle
  simulateBattle(monster1, monster2): Observable<any>{
      return this.http.post(this.simulateURL, this.mockData);
  }
}
