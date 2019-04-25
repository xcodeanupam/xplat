import { Component } from '@angular/core';

// libs
import { BaseComponent } from '@xplatemy/core';
import { AppService } from '@xplatemy/nativescript/core';

export abstract class AppBaseComponent extends BaseComponent {
  constructor(protected appService: AppService) {
    super();
  }
}
