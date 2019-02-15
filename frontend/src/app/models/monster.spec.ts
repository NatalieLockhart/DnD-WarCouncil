import { Monster } from './monster';

describe('Monster', () => {
  it('should create an instance', () => {
    expect(new Monster("monsterName", 1)).toBeTruthy();
  });
});
