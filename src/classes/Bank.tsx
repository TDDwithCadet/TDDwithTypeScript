import Money from './Money'

export interface Expression{
    reduce(to:string):Money
}

export class Bank{
    reduce(source:Expression, to:string):Money{
        return (source.reduce(to));
    }
}