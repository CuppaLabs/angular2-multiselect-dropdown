import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MockService } from './examples/mock-data';
import { AppComponent } from './app.component';
import { AngularMultiSelectModule } from '../../projects/angular2-multiselect-dropdown-lib/src/lib/multiselect.component';
import { AppRouterModule } from './app.router';
import { BasicExample } from './examples/basic';
import { SingleSelectionExample } from './examples/singleselection';
import { GroupByExample } from './examples/groupBy';
import { SearchFilterExample } from './examples/searchFilter';
import { TemplatingExample } from './examples/templating';
import { ResetDropdownExample } from './examples/resetdropdown';
import { DisableModeExample } from './examples/disablemode';
import {LimitSelectionExample } from './examples/limitselection';
import {LimitBadgesExample } from './examples/limitbadges';
import { CustomPlaceholderExample } from './examples/customplaceholder';
import { StylingExample } from './examples/styling';
import { ng2Gist } from './examples/gist';
import { UsingWithFormExample } from './examples/usingWithForms';
import { UsingWithReactiveFormExample } from './examples/usingInReactForms';
import { LazyLoadingExample } from './examples/lazyLoading';
import { MultipleDropdownsExample } from './examples/multipleDropdowns';
import { DynamicDataSetsExample } from './examples/dynamicDataSets';
import { ThemingExample } from './examples/theming';
import { RemoteDataExample } from './examples/remoteData';
import { CustomSearchExample } from './examples/customSearch';
import { SearchFilterByOnePropertyExample } from './examples/searchByOneProperty';
import {LazyLoadingRemoteDataExample } from './examples/lazyLoadingRemoteData';
import {SearchFilterAddItemExample } from './examples/searchFilterAddNewItem';
import { EventsExample } from './examples/events';
import { HighlightModule } from 'ngx-highlightjs';
import { UsingInListExample } from './examples/usingInList';
import {SourceTab} from './components/sourcetab/sourcetab.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { CheckForUpdateService } from './check-for-update.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogContentExampleDialog, UsingWithinDialog } from './examples/usingWithinDialog';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdsenseModule } from 'ng2-adsense';

@NgModule({
    declarations: [
        AppComponent,
        ng2Gist,
        BasicExample,
        SingleSelectionExample,
        GroupByExample,
        SearchFilterExample,
        TemplatingExample,
        ResetDropdownExample,
        DisableModeExample,
        LimitSelectionExample,
        LimitBadgesExample,
        CustomPlaceholderExample,
        StylingExample,
        UsingWithFormExample,
        UsingWithReactiveFormExample,
        LazyLoadingExample,
        MultipleDropdownsExample,
        DynamicDataSetsExample,
        ThemingExample,
        RemoteDataExample,
        CustomSearchExample,
        SearchFilterByOnePropertyExample,
        LazyLoadingRemoteDataExample,
        SearchFilterAddItemExample,
        EventsExample,
        UsingInListExample,
        SourceTab,
        DialogContentExampleDialog,
        UsingWithinDialog
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
        ReactiveFormsModule,
        FormsModule,
        AppRouterModule,
        AngularMultiSelectModule,
        HttpClientModule,
        AdsenseModule.forRoot(),
        NgbModule,
        HighlightModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
        BrowserAnimationsModule
    ],
    providers: [MockService, CheckForUpdateService],
    bootstrap: [AppComponent]
})
export class AppModule { }
