import {Expression} from './Bank';

export default class Money implements Expression{
    protected amount:number;
    protected currency:string;

    constructor(amount:number, currency:string){
        this.amount = amount;
        this.currency = currency;
    }

    public equals(Object:Object){
        const money:Money = Object as Money;
        return (this.amount === money.amount
            && this.getCurrency() === money.getCurrency());
    }

    public static dollar(amount:number):Money{
        return (new Money(amount, "USD"));
    }

    public static franc(amount:number):Money{
        return (new Money(amount, "CHF"));
    }

    public times(multipier:number):Money {
        return (new Money(this.amount * multipier, this.currency));
    }

    public plus(addend:Money):Expression {
        return (new Money(this.amount + addend.amount, this.currency))
    }

    getCurrency() {
        return this.currency;
    }
}