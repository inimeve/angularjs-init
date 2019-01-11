// Root style imports
import 'bootstrap/dist/css/bootstrap.css';

// Root main imports
import * as angular from "angular";

// Aggregate all modules
import { AppAggregator } from './app.aggregator';

angular.module('app', AppAggregator.resolveModules());
