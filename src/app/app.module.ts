import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent, Component1, Component2, Component3, Component4 } from './app.component';
import { routingModule } from './app.routing';
import { NgxBreadcrumbModule } from './components/breadcrumb/breadcrumb.module';


@NgModule({
  declarations: [
    AppComponent,
    Component1,
    Component2,
    Component3,
    Component4
  ],
  imports: [
    BrowserModule,
    routingModule,
    NgxBreadcrumbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
