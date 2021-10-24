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
  simulateDetailedURL: string = "http://localhost:3000/simulateDetailed/";
  getURL: string =  "http://localhost:3000/monster/";
  getMonsterNameListURL: string = "http://localhost:3000/monsters"

  constructor(private http:HttpClient) { }

  monsterList : Array<Monster>;

  //call the Node API to get the results of the battle
  simulateBattle(apiObject: Monster[], isDetailed: boolean): Observable<any>{
      // this.monsterList = [];
      // this.monsterList.push(monster1);
      // this.monsterList.push(monster2);
	  console.log(isDetailed);
	  if(isDetailed){
		return this.http.post(this.simulateDetailedURL, JSON.stringify(apiObject), httpOptions);
	  }
	  else{
		return this.http.post(this.simulateURL, JSON.stringify(apiObject), httpOptions);
	  }
  }

  //get the list of monster names
  getMonsterNameList(){
    return this.http.get(this.getMonsterNameListURL);
  }
}
