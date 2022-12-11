export class Pair{
    private from:string;
    private to:string;

    constructor(from:string, to:string){
        this.from = from;
        this.to = to;
    }

    public equals(object:Object):boolean{
        const pair:Pair = object as Pair;
        return (this.from === pair.from && this.to === pair.to);
    }

    public hashCode():number{
        return (0);
    }
}