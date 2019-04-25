import { NgModule, Optional, SkipSelf } from '@angular/core';

import { IonicModule } from '@ionic/angular';
import { throwIfAlreadyLoaded } from '@xplatemy/utils';
import { FooCoreModule } from '@xplatemy/web';

@NgModule({
  imports: [FooCoreModule, IonicModule.forRoot()]
})
export class FooIonicCoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: FooIonicCoreModule
  ) {
    throwIfAlreadyLoaded(parentModule, 'FooIonicCoreModule');
  }
}
