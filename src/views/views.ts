// Root main imports
import * as angular from "angular";

// style imports
import './views.base.scss';

import { ViewsAggregator } from "./views.aggregator";

export class AppViews {

    static NAME: string = 'appViews';

    private static $inject = [];

    constructor() {}

}

angular.module(AppViews.NAME, ViewsAggregator.resolveModules());