import Money from "./Money";

export default class Dollar extends Money{
    public times(multipier:number) {
        return (new Dollar(this.amount * multipier));
    }
}