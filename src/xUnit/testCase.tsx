
import { TestResult } from "./testResult";
import WasRun from "./wasRun";

export class TestCase {
    private name:string;

    constructor(name:string){
        this.name = name;
    }

    public setUp(){}
    public tearDown(){}

    public run():TestResult {
        const result:TestResult = new TestResult();
        result.testStarted();
        this.setUp();
        const method:string = "this." + this.name + "()";
        try {
            eval(method);
        } catch(e: any) {
            console.log(method, " not exist.")
        }
        this.tearDown();
        return (result);
    }
}
