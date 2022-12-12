
import WasRun from "./wasRun";

export class TestCase {
    private name:string;

    constructor(name:string){
        this.name = name;
    }

    public run():string {
        const method:string = "this." + this.name + "()";
        let result:string = "None";
        try {
            result = eval(method);
        } catch(e: any) {
            console.log(method, "function not exist.")
        }
        return (result);
    }
}
