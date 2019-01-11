import angular = require("angular");
import { NavigationAggregator } from "./navigation.aggregator";
import { NavigationService } from "./navigation.service";

export class AppNavigation {

    static NAME: string = 'appNavigation';

    private $inject: string[] = [];

    constructor() {}

}

angular.module(AppNavigation.NAME, NavigationAggregator.resolveModules())
    .service(NavigationService.NAME, NavigationService);