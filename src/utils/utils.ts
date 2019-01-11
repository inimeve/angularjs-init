import angular = require("angular");
import { UtilsAggregator } from "./utils.aggregator";
import { MathService } from "./math.service";

export class AppUtils {

    static NAME: string = 'appUtils';

    private $inject: string[] = [];

    constructor() {}

}

angular.module(AppUtils.NAME, UtilsAggregator.resolveModules())
    .service(MathService.NAME, MathService);