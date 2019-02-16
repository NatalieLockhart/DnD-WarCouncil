export class Action {
    public target1: string;
    public target2: string;
    public description: string;
    public attack: string;
    public damage: number;
    public hit: boolean;
    public kill?: boolean;
    public crit?: boolean;
    public finalStatement: string;

    constructor(obj) { 
        this.target1 = obj.target1;
        this.target2 = obj.target2;
        this.description = obj.description;
        this.attack = obj.attack;
        this.damage = obj.damage;
        this.hit = obj.hit;
        this.kill = obj.kill;
        this.crit = obj.crit;
        this.finalStatement = obj.finalStatement;
    }
}
