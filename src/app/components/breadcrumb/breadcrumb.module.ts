import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { BreadcrumbComponent } from './breadcrumb.component';
import { BreadcrumbService } from './breadcrumb.service';

export * from './breadcrumb.component';
export * from './breadcrumb.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BreadcrumbComponent
  ],
  exports: [
    BreadcrumbComponent
  ]
})
export class NgxBreadcrumbModule {
  static forRoot(): ModuleWithProviders<NgxBreadcrumbModule> {
    return {
      ngModule: NgxBreadcrumbModule,
      providers: [BreadcrumbService]
    };
  }
}
