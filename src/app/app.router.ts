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
import { UsingWithReactiveFormExample } from './examples/usingInReactForms';
import { LazyLoadingExample } from './examples/lazyLoading';
import { MultipleDropdownsExample } from './examples/multipleDropdowns';
import { DynamicDataSetsExample } from './examples/dynamicDataSets';
import { ThemingExample } from './examples/theming';
import { RemoteDataExample } from './examples/remoteData';
import { CustomSearchExample } from './examples/customSearch';
import { SearchFilterByOnePropertyExample } from './examples/searchByOneProperty';
import { LazyLoadingRemoteDataExample } from './examples/lazyLoadingRemoteData';
import { SearchFilterAddItemExample } from './examples/searchFilterAddNewItem';
import { EventsExample } from './examples/events';
import { UsingInListExample } from './examples/usingInList';
import { UsingWithinDialog } from './examples/usingWithinDialog';

const appRoutes: Routes = [
  { path: '', redirectTo: '/basic', pathMatch: 'full' },
  { path: 'basic', component: BasicExample },
  { path: 'singleselection', component: SingleSelectionExample },
  { path: 'searchfilter', component: SearchFilterExample },
  { path: 'groupby', component: GroupByExample },
  { path: 'templating', component: TemplatingExample },
  { path: 'dropdownMethods', component: ResetDropdownExample },
  { path: 'disablemode', component: DisableModeExample },
  { path: 'limitselection', component: LimitSelectionExample },
  { path: 'limitbadges', component: LimitBadgesExample },
  { path: 'customplaceholder', component: CustomPlaceholderExample },
  { path: 'styling', component: StylingExample },
  { path: 'usinginform', component: UsingWithFormExample },
  { path: 'usinginreactiveform', component: UsingWithReactiveFormExample },
  { path: 'lazyloading', component: LazyLoadingExample },
  { path: 'multipledropdowns', component: MultipleDropdownsExample },
  { path: 'dynamicdatasets', component: DynamicDataSetsExample },
  { path: 'theming', component: ThemingExample },
  { path: 'remoteData', component: RemoteDataExample },
  { path: 'customSearchAPI', component: CustomSearchExample },
  { path: 'searchFilterByOneProperty', component: SearchFilterByOnePropertyExample },
  { path: 'lazyloadingRemoteData', component: LazyLoadingRemoteDataExample },
  { path: 'searchfilterAddNewItem', component: SearchFilterAddItemExample },
  { path: 'events', component: EventsExample },
  { path: 'usingInList', component: UsingInListExample },
  { path: 'usingInDialog', component: UsingWithinDialog }

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
