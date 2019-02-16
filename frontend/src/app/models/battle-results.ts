import { Action } from './action';

export class BattleResults {
    public winningTeam: number;
    public actionList: Action[];
    
    constructor(
        
      ) { }

    setUpActionList(obj : object[]){
      this.actionList = [];
      obj.forEach( (action) => {
        this.actionList.push(new Action(action));
      });
    }

}
