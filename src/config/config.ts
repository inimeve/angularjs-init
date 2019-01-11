// Root main imports
import * as angular from "angular";

// Module imports
import { UrlService } from "@uirouter/angularjs";
import { ConfigAggregator } from "./config.aggregator";

export class AppConfig {

    static NAME: string = 'appConfig';

    private static $inject = ['$urlServiceProvider'];

    constructor() {}

    public static routeConfig($urlServiceProvider: UrlService) {
        $urlServiceProvider.config.hashPrefix('');
        $urlServiceProvider.rules.otherwise('/home');
    }

}

angular.module(AppConfig.NAME, ConfigAggregator.resolveModules())
    .config(AppConfig.routeConfig);