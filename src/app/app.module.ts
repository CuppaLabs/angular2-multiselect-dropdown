import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularMultiSelectModule } from './angular2-multiselect-dropdown/multiselect.component';
import { AppRouterModule } from './app.router';
import { BasicExample } from './examples/basic';
import { SingleSelectionExample } from './examples/singleselection';
import { GroupByExample } from './examples/groupBy';
import { SearchFilterExample } from './examples/searchFilter';
import { ApiSearchFilterExample } from './examples/apiSearchFilter';
import { TemplatingExample } from './examples/templating';
import { ResetDropdownExample } from './examples/resetdropdown';
import { DisableModeExample } from './examples/disablemode';
import {LimitSelectionExample } from './examples/limitselection';
import {LimitBadgesExample } from './examples/limitbadges';
import { CustomPlaceholderExample } from './examples/customplaceholder';
import { StylingExample } from './examples/styling';
import { ng2Gist } from './examples/gist';
import { TabViewModule } from 'primeng/primeng';
import { UsingWithFormExample } from './examples/usingWithForms';
import { UsingWithReactiveFormExample } from './examples/usingInReactForms';
import { LazyLoadingExample } from './examples/lazyLoading';

@NgModule({
  declarations: [
    AppComponent,
    ng2Gist,
    BasicExample,
    SingleSelectionExample,
    GroupByExample,
    SearchFilterExample,
    ApiSearchFilterExample,
    TemplatingExample,
    ResetDropdownExample,
    DisableModeExample,
    LimitSelectionExample,
    LimitBadgesExample,
    CustomPlaceholderExample,
    StylingExample,
    UsingWithFormExample,
    UsingWithReactiveFormExample,
    LazyLoadingExample
    ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    AppRouterModule,
    AngularMultiSelectModule,
    TabViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
