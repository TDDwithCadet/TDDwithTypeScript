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
        console.log(this.test.wasRun);
        return(this.test.wasSetUp);
    }
}

export const testForTest = () => {
    return (new TestCaseTest("testSetUp").run());
}