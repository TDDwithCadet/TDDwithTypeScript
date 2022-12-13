import { TestCase } from "./testCase";
import { TestResult } from "./testResult";

export class TestSuite{
    private tests:TestCase[];

    constructor(){
        this.tests = [];
    }
    public add(test:TestCase){
        this.tests.push(test);
    }

    public run(result:TestResult){
        for (const test of this.tests){
            test.run(result);
        }
    }
}