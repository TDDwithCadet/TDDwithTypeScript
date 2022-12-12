import { TestCase } from "./testCase";

export default class WasRun extends TestCase {
    public wasRun:string;

    constructor(name:string) {
        super(name);
        this.wasRun = "None";
    }

    public testMethod():string {
        this.wasRun = "1";
        return (this.wasRun);
    }
}