import Money from "./Money";
import {Expression} from "./Bank";

export class Sum implements Expression {
    public augend:Money;
    public addend:Money;

    constructor(augend:Money, addend:Money) {
        this.augend = augend;
        this.addend = addend;
    }

    public reduce(to:string):Money {
            const amount:number = this.augend.amount + this.addend.amount;
            return new Money(amount, to);
    }
}