// Module imports
import { AppConfig } from "./config/config";
import { AppViews } from "./views/views";
import { AppUtils } from "./utils/utils";
import { AppNavigation } from "./navigation/navigation";

export class AppAggregator {

    public static resolveModules(): string[] {
        let arquitectureModules: string[] = [
            AppConfig.NAME,
            AppUtils.NAME,
            AppNavigation.NAME
        ];
        
        let viewsModules: string[] = [
            AppViews.NAME
        ];
    
        return arquitectureModules.concat(viewsModules);
    }

}