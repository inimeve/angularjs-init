import { IComponentOptions } from "angular";
import { DetailController } from "./detail.controller";

export class DetailComponent implements IComponentOptions{

    static NAME = 'detailComponent';

    bindings:  {[boundProperty: string]: string} = {};

    template: string = require('./detail.html');

    controller: any = DetailController;

}