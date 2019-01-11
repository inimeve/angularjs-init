// View imports
import { HomeModule } from './home/home.module';
import { DetailModule } from './detail/detail.module';

export class ViewsAggregator {

    public static resolveModules(): string[] {
                
        let viewsModules: string[] = [
            HomeModule,
            DetailModule
        ];

        return viewsModules;
    }

}