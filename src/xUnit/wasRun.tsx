import { TestCase } from "./testCase";

export default class WasRun extends TestCase {
    public wasRun:string;
    public wasSetUp:string;

    constructor(name:string) {
        super(name);
        this.wasRun = "None";
        this.wasSetUp = "None";
    }

    public testMethod():string {
        this.wasRun = "1";
        return (this.wasRun);
    }

    public setUp():void{
        this.wasRun = "None";
        this.wasSetUp = "1";
    }
}