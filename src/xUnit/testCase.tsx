
import { TestResult } from "./testResult";
import WasRun from "./wasRun";

export class TestCase {
    protected name:string;

    constructor(name:string){
        this.name = name;
    }

    public setUp(){}
    public tearDown(){}

    public run():TestResult {
        const result:TestResult = new TestResult();
        result.testStarted();
        result.testFailed();
        this.setUp();
        try {
            const method:string = "this." + this.name + "()";
            eval(method);
        } catch(e: any) {
            result.testFailed();
        }
        this.tearDown();
        return (result);
    }
}
