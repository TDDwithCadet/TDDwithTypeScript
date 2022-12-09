export default class Franc {
    private amount:number;
    constructor(amount:number){
        this.amount = amount;
    }
    public times(multipier:number) {
        return (new Franc(this.amount * multipier));
    }
    public equals(Object:Object) {
        const dollar:Franc = Object as Franc;
        return (this.amount === dollar.amount);
    }

}