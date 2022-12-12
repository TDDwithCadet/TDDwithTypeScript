import { TestCase } from './testCase';
import WasRun from './wasRun'

export class TestCaseTest extends TestCase {
    public testRunning(){
        const test:WasRun = new WasRun ("testMethod");
        const result:string = test.run();
        return (result);
    }
}

export const testForTest = () => {
    return (new TestCaseTest("testRunning").run());
}