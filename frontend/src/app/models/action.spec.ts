import { Action } from './action';

describe('Action', () => {
  it('should create an instance', () => {
    expect(new Action("hello")).toBeTruthy();
  });

  it('should populate an Action object from JSON', () => {
    let testAction : Action = new Action({"target1":"Adult Black Dragon","target2":"Adult White Dragon","description":"attacks","attack":"Bite","hit":false,"damage":0,"finalStatement":"Adult Black Dragon attacks Adult White Dragon using Bite. It misses!"});
    expect(testAction instanceof Action && testAction.target1 == "Adult Black Dragon").toBeTruthy;
  });
});
