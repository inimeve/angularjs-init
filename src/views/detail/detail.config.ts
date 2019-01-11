import { StateProvider } from "@uirouter/angularjs";
import { DetailComponent } from "./detail.component";

export class DetailConfig {

    private static $inject = ['$stateProvider'];

    constructor() {}

    public static routeConfig($stateProvider: StateProvider): void {
        $stateProvider
            .state('detail', {
                url: '/detail',
                component: DetailComponent.NAME
            });
    }

}



