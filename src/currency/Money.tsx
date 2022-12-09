
export default abstract class Money {
    protected amount:number;

    constructor(amount:number){
        this.amount = amount;
    }

    public equals(Object:Object){
        const money:Money = Object as Money;
        return (this.amount === money.amount
            && this.constructor.name === money.constructor.name);
    }

    public static dollar(amount:number){
        return (new Dollar(amount) as Money);
    }

    public static franc(amount:number){
        return (new Franc(amount) as Money);
    }

    public abstract times(amount:number):void;
}

export class Franc extends Money {
    public times(multipier:number) {
        return (new Franc(this.amount * multipier));
    }
}

export class Dollar extends Money{
    public times(multipier:number) {
        return (new Dollar(this.amount * multipier));
    }
}