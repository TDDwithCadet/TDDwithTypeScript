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

    public testRunning(){
        this.test = new WasRun("testMethod");
        const result:TestResult = this.test.run();
        return (result);
    }
    public setUp(){
        this.test = new WasRun("testMethod");
    }
    public testSetUp(){
        this.test.run();
        return (this.test.wasSetUp);
    }

    public testTemplateMethod(){
        this.test = new WasRun("testMethod");
        this.test.run();
        return ("setUp testMethod tearDown " === this.test.log);
    }
    public testResult(){
        this.test = new WasRun("testMethod");
        const result:TestResult = this.test.run();
        return ("1 run, 0 failed" == result.summary()? "1" : "None");
    }
    public testFailedResult(){
        this.test = new WasRun("testBrokenMethod");
        const result:TestResult = this.test.run();
        return ("1 run, 1 failed" == result.summary());
    }
}

export const testForTest = () => {
    return (new TestCaseTest("testResult").run().summary() === "1 run, 0 failed" ? "1" : "None");
}