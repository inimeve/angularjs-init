// Module imports
import uirouter from "@uirouter/angularjs";

export class ConfigAggregator {

    public static resolveModules(): string[] {
        let externalModules: string[] = [
            uirouter
        ];
    
        return externalModules;
    }

}