import { Component } from '@angular/core';

// libs
import { AppBaseComponent, AppService } from '@xplatemy/nativescript';

@Component({
  selector: 'foo-root',
  template: `
    <StackLayout class="page p-20">
      <Label >hello</Label>
      <Label> welcome to mobile application </Label>
    </StackLayout>`
})
export class AppComponent extends AppBaseComponent {

  constructor(
    appService: AppService
  ) {
    super(appService);
  }
}
