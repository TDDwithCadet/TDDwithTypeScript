export default class Dollar {
    amount:number;
    constructor(amount:number){
        this.amount = amount;
    }
    public times(multipier:number) {
        this.amount *= multipier
        return this.amount;
    }
}