export default class Money {
    protected amount:number;

    constructor(amount:number){
        this.amount = amount;
    }
    
    public equals(Object:Object) {
        const money:Money = Object as Money;
        return (this.amount === money.amount);
    }
}