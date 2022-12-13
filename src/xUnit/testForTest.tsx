import { TestCase } from './testCase';
import { TestResult } from './testResult';
import { TestSuite } from './testSuite';
import WasRun from './wasRun'

export class TestCaseTest extends TestCase {
    private test:WasRun;
    private result:TestResult;

    constructor(name:string) {
        super(name);
        this.test = new WasRun("undefined");
        this.result = new TestResult();
    }

    public setUp(){
        this.test = new WasRun("testMethod");
    }

    public testRunning(){
        this.test = new WasRun("testMethod");
        this.test.run(this.result);
    }

    public testSetUp(){
        this.test.run(this.result);
    }

    public testTemplateMethod(){
        this.test = new WasRun("testMethod");
        this.test.run(this.result);
    }
    public testResult(){
        this.test = new WasRun("testMethod");
        this.test.run(this.result);
    }
    public testFailResultFormatting(){
        const result:TestResult = new TestResult();
        result.testStarted();
        result.testFailed();
    }
    public testFailedResult(){
        this.test = new WasRun("testBrokenMethod");
        this.test.run(this.result);
    }
    public testSuite(){
        const sutie:TestSuite = new TestSuite();
        sutie.add(new WasRun("testMethod"));
        sutie.add(new WasRun("testBrokenMethod"));
        sutie.run(this.result);
    }
}

export const testForTest = () => {
    const suite:TestSuite = new TestSuite();
    suite.add(new TestCaseTest("testTemplateMethod"));
    suite.add(new TestCaseTest("testResult"));
    suite.add(new TestCaseTest("testFailResultFormatting"));
    suite.add(new TestCaseTest("testSuite"));
    suite.add(new TestCaseTest("testFailedResult"));
    const result:TestResult = new TestResult();
    suite.run(result);
    return (result);
}