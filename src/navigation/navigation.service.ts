import { StateService } from "@uirouter/angularjs";

export class NavigationService {

    static NAME: string = 'navigationService';

    private $inject: string[] = ['$state'];

    constructor(private $state: StateService) {}

    public goToWindow = (stateName: string):void => {
        this.$state.go(stateName, {});
    };

}