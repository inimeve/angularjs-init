import angular = require("angular");

import "./detail.scss";

import { DetailConfig } from "./detail.config";
import { DetailComponent } from "./detail.component";

const NAME: string = "detailModule";

const MODULE_DEPENDENCIES: string[] = [];


export const DetailModule = angular.module(NAME, MODULE_DEPENDENCIES)
    .component(DetailComponent.NAME, new DetailComponent())
    .config(DetailConfig.routeConfig)
    .name;
