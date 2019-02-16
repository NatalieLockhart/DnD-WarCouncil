import { BattleResults } from './battle-results';
import { Action } from './action';

let battleResults = new BattleResults();

describe('BattleResults', () => {
  it('should create an instance', () => {
    expect(new BattleResults()).toBeTruthy();
  });

  it('should populate the actionList property from a list of JSON objects', () =>{      
    battleResults.setUpActionList([{"target1":"Goblin","target2":"Tarrasque","description":"attacks","attack":"Scimitar","hit":false,"damage":0,"finalStatement":"Goblin attacks Tarrasque using Scimitar. It misses!"},{"target1":"Tarrasque","target2":"Goblin","description":"attacks","attack":"Bite","hit":true,"damage":35,"kill":true,"finalStatement":"Tarrasque attacks Goblin using Bite. It hits, dealing 35 damage! Goblin has been felled!"}]);
    expect(battleResults.actionList.length == 2 && battleResults.actionList[0].target2 == "Tarrasque").toBeTruthy;
  });

  it('should populate the actionList with Action objects', () =>{
    expect(battleResults.actionList[0] instanceof Action).toBeTruthy;
  });
});
