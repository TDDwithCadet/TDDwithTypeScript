
export default class Money {
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

    public static franc(amount:number){
        return (new Money(amount, "CHF"));
    }

    public times(multipier:number) {
        return (new Money(this.amount * multipier, this.currency));
    }

    getCurrency() {
        return this.currency;
    }
}