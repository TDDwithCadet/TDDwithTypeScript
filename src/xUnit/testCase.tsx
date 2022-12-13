
import { TestResult } from "./testResult";

export class TestCase {
    protected name:string;

    constructor(name:string){
        this.name = name;
    }

    public setUp(){}
    public tearDown(){}

    public run(result:TestResult):TestResult {
        result.testStarted();
        this.setUp();
        try {
            const method:string = "this." + this.name + "()";
            eval(method);
        } catch(e: any) {
            console.log(e);
            result.testFailed();
        }
        this.tearDown();
        return (result);
    }
}
