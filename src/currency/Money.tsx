
export default abstract class Money {
    protected amount:number;
    protected currency:string;

    constructor(amount:number, currency:string){
        this.amount = amount;
        this.currency = currency;
    }

    public equals(Object:Object){
        const money:Money = Object as Money;
        return (this.amount === money.amount
            && this.constructor.name === money.constructor.name);
    }

    public static dollar(amount:number):Money{
        return (new Dollar(amount, "USD"));
    }

    public static franc(amount:number){
        return (new Franc(amount, "CHF"));
    }

    public abstract times(amount:number):Money;
    getCurrency() {
        return this.currency;
    }
}

export class Franc extends Money {
    public times(multipier:number) {
        return (Money.franc(this.amount * multipier));
    }
}

export class Dollar extends Money{
    public times(multipier:number) {
        return (Money.dollar(this.amount * multipier));
    }
}