import { MathService } from "../../utils/math.service";


export class HomeController {

    static NAME = 'HomeController';

    private static $inject: string[] = ['mathService'];

    public result: number;
    
    constructor(private mathService: MathService) {}


    public btnClick = () => {
        this.result = this.mathService.plus(7, 12);
    }

}