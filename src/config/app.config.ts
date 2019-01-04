import uirouter, { UrlService } from "@uirouter/angularjs";

import { HomeModule } from "../views/home/home.module";
import { AppUtilsService } from "../app.utils";

export class AppConfig {

    private static $inject = ['$urlServiceProvider'];

    constructor() {}

    public static routeConfig($urlServiceProvider: UrlService) {
        $urlServiceProvider.config.hashPrefix('');
        $urlServiceProvider.rules.otherwise('/home');
    }

    public static resolveModules(): string[] {
        let coreModules: string[] = [
            uirouter
        ];
        
        let externalComponentModules: string[] = [];
        
        let windowModules: string[] = [
            HomeModule
        ];
        
        let globalServices: string[] = [
            AppUtilsService
        ];
    
        return coreModules.concat(externalComponentModules).concat(windowModules).concat(globalServices);
    }

}