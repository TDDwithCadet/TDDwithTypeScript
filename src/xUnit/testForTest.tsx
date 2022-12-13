import { isThisTypeNode } from 'typescript';
import { TestCase } from './testCase';
import { TestResult } from './testResult';
import WasRun from './wasRun'

export class TestCaseTest extends TestCase {
    private test:WasRun;

    constructor(name:string) {
        super(name);
        this.test = new WasRun("undefined");
    }

    public setUp(){
        this.test = new WasRun("testMethod");
    }

    public testRunning(){
        this.test = new WasRun("testMethod");
        const result:TestResult = this.test.run();
        return (result);
    }

    public testSetUp(){
        this.test.run();
        this.functionTest(this.test.wasSetUp === "1")
    }

    public testTemplateMethod(){
        this.test = new WasRun("testMethod");
        this.test.run();
        this.functionTest("setUp testMethod tearDown " === this.test.log);
    }
    public testResult(){
        this.test = new WasRun("testMethod");
        const result:TestResult = this.test.run();
        this.functionTest("1 run, 0 failed" === result.summary())
    }
    public testFailResultFormatting(){
        const result:TestResult = new TestResult();
        result.testStarted();
        result.testFailed();
        this.functionTest("1 run, 1 failed" === result.summary());
    }
    public testFailedResult(){
        this.test = new WasRun("testBrokenMethod");
        const result:TestResult = this.test.run();
        this.functionTest("1 run, 1 failed" === result.summary());
    }
    public functionTest(check:boolean){
        if (check)
            console.log(this.name, "is fine");
        else
            console.log(this.name, "is fail");
    }
}

export const testForTest = () => {
    return (new TestCaseTest("testFailResultFormatting").run().summary() === "1 run, 1 failed" ? "1" : "None");
}