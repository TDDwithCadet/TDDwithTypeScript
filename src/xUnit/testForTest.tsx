import { isThisTypeNode } from 'typescript';
import { TestCase } from './testCase';
import WasRun from './wasRun'

export class TestCaseTest extends TestCase {
    private test:WasRun;

    constructor(name:string) {
        super(name);
        this.test = new WasRun("undefined");
    }

    public testRunning(){
        this.test = new WasRun("testMethod");
        const result:string = this.test.run();
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
}

export const testForTest = () => {
    return (new TestCaseTest("testSetUp").run());
}