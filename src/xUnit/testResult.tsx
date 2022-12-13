export class TestResult{
    private runCount:number;
    private failureCount:number;

    constructor(){
        this.runCount = 0;
        this.failureCount = 0;
    }

    public testStarted(){
        this.runCount += 1;
    }

    public testFailed(){
        this.failureCount += 1;
    }

    public summary(){
        const result:string = this.runCount + " run, " + this.failureCount + " failed";
        return (result);
    }
}