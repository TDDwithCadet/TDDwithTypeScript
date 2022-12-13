import { TestCase } from "./testCase";

export default class WasRun extends TestCase {
    public wasRun:string;
    public wasSetUp:string;
    public log:string;

    constructor(name:string) {
        super(name);
        this.wasRun = "None";
        this.wasSetUp = "None";
        this.log = "None";
    }

    public testMethod():string {
        this.wasRun = "1";
        this.log = this.log + "testMethod ";
        return (this.wasRun);
    }

    public setUp():void{
        this.wasRun = "None";
        this.wasSetUp = "1";
        this.log = "setUp ";
    }

    public tearDown():void{
        this.log = this.log + "tearDown";
    }
}