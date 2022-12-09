import Money from "./Money";

export default class Franc extends Money {
    public times(multipier:number) {
        return (new Franc(this.amount * multipier));
    }
}