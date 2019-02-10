import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Monster } from '../models/monster';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  simulateURL: string = "http://localhost:3000/simulate/";
  getURL: string =  "http://localhost:3000/monster/";

  constructor(private http:HttpClient) { }

  monsterList : Array<Monster> = [];

  //call the Node API to get the results of the battle
  simulateBattle(monster1, monster2): Observable<any>{
      this.monsterList.push(monster1);
      this.monsterList.push(monster2);

      return this.http.post(this.simulateURL, JSON.stringify(this.monsterList), httpOptions);
  }
}
