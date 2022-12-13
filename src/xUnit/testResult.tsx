export class TestResult{
    private runCount:number;

    constructor(){
        this.runCount = 0;
    }

    public testStarted(){
        this.runCount += 1;
    }

    public summary(){
        const result:string = this.runCount + " run, 0 failed";
        return (result);
    }
}