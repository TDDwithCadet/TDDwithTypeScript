export default class Dollar {
    amount:number;
    constructor(amount:number){
        this.amount = amount;
    }
    public times(multipier:number) {
        return (new Dollar(this.amount * multipier));
    }
}