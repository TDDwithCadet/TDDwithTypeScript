import Money from './Money'

export interface Expression{
    
}

export class Bank{
    reduce(source:Expression, to:string):(Money | null){
        return (Money.dollar(10));
    }
}