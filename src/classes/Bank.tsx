import Money from './Money'
import {Pair} from './Pair'

export interface Expression{
    reduce(bank:Bank, to:string):Money;
    plus(addend:Expression):Expression;
    times(multiplier:number):Expression;
}

export class Bank{
    private rates:Map<Pair, number> = new Map();

    reduce(source:Expression, to:string):Money{
        return (source.reduce(this, to));
    }
    rate(from:string, to:string):number{
        if (from === to)
            return (1);
        const rate:number | undefined = this.getValue(new Pair(from, to));
        
        if (rate)
            return (rate);
        else
            return (1);
    }
    addRate(from:string, to:string, rate:number){
        this.rates.set(new Pair(from, to), rate);
    }
    //this function not declined in book
    getValue(checkKey:Pair): number | undefined {
        for (let [key, value] of this.rates.entries()) {
            if (key.equals(checkKey)) {
                return value;
            }
        }
    }
}