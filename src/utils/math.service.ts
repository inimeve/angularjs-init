// export interface IMathService {
//     plus(x: number, y, number): number;
// }

export class MathService {

    static NAME: string = 'mathService';

    private $inject: string[] = [];

    constructor() {}

    public plus = (x: number, y: number):number => {
        return x + y;
    };

}