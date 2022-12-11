import {Bank, Expression} from './Bank';
import {Sum} from './Sum'

export default class Money implements Expression{
    public amount:number;
    protected currency:string;

    constructor(amount:number, currency:string){
        this.amount = amount;
        this.currency = currency;
    }

    public equals(Object:Object):boolean{
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

    public times(multipier:number):Expression {
        return (new Money(this.amount * multipier, this.currency));
    }

    public plus(addend:Expression):Expression {
        return (new Sum(this, addend))
    }

    public reduce(bank:Bank, to:string):Money{
        const rate:number = bank.rate(this.currency, to); 
        return (new Money(this.amount / rate, to));
    }

    getCurrency() {
        return this.currency;
    }
}