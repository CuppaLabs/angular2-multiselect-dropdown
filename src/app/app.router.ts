import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BasicExample } from './examples/basic';
import { SingleSelectionExample } from './examples/singleselection';
import { GroupByExample } from './examples/groupBy';
import { SearchFilterExample } from './examples/searchFilter';
import { TemplatingExample } from './examples/templating';
import { ResetDropdownExample } from './examples/resetdropdown';
import { DisableModeExample } from './examples/disablemode';
import { LimitSelectionExample } from './examples/limitselection';
import { LimitBadgesExample } from './examples/limitbadges';
import { CustomPlaceholderExample } from './examples/customplaceholder';
import { StylingExample } from './examples/styling';
import { UsingWithFormExample } from './examples/usingWithForms';

const appRoutes: Routes = [
    { path: '', redirectTo: '/basic',pathMatch: 'full'},
    { path: 'basic', component: BasicExample},
    { path: 'singleselection', component: SingleSelectionExample},
    { path: 'searchfilter', component: SearchFilterExample},
    { path: 'groupby', component: GroupByExample},
    { path: 'templating', component: TemplatingExample},
    { path: 'resetdropdown', component: ResetDropdownExample},
    { path: 'disablemode', component: DisableModeExample},
    { path: 'limitselection', component: LimitSelectionExample},
    { path: 'limitbadges', component: LimitBadgesExample},
    { path: 'customplaceholder', component: CustomPlaceholderExample},
    { path: 'styling', component: StylingExample},
    { path: 'usinginform', component: UsingWithFormExample}
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  exports: [
    RouterModule
  ]

})
export class AppRouterModule { }
