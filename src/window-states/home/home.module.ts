import angular = require("angular");

import "./home.scss";

import { HomeConfig } from "./home.config";
import { HomeComponent } from "./home.component";

const NAME: string = "homeModule";

const MODULE_DEPENDENCIES: string[] = [];


export const HomeModule = angular.module(NAME, MODULE_DEPENDENCIES)
    .component(HomeComponent.NAME, new HomeComponent())
    .config(HomeConfig.routeConfig)
    .name;
