export default class Dollar {
    private amount:number;
    constructor(amount:number){
        this.amount = amount;
    }
    public times(multipier:number) {
        return (new Dollar(this.amount * multipier));
    }
    public equals(Object:Object) {
        const dollar:Dollar = Object as Dollar;
        return (this.amount === dollar.amount);
    }

}