import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BasicExample } from "./examples/basic";
import { SingleSelectionExample } from "./examples/singleselection";
import { GroupByExample } from "./examples/groupBy";
import { SearchFilterExample } from "./examples/searchFilter";
import { TemplatingExample } from "./examples/templating";
import { ResetDropdownExample } from "./examples/resetdropdown";
import { DisableModeExample } from "./examples/disablemode";
import { LimitSelectionExample } from "./examples/limitselection";
import { LimitBadgesExample } from "./examples/limitbadges";
import { CustomPlaceholderExample } from "./examples/customplaceholder";
import { StylingExample } from "./examples/styling";
import { UsingWithFormExample } from "./examples/usingWithForms";
import { UsingWithReactiveFormExample } from "./examples/usingInReactForms";
import { LazyLoadingExample } from "./examples/lazyLoading";
import { MultipleDropdownsExample } from "./examples/multipleDropdowns";
import { DynamicDataSetsExample } from "./examples/dynamicDataSets";
import { ThemingExample } from "./examples/theming";
import { RemoteDataExample } from "./examples/remoteData";
import { CustomSearchExample } from "./examples/customSearch";
import { SearchFilterByOnePropertyExample } from "./examples/searchByOneProperty";
import { LazyLoadingRemoteDataExample } from "./examples/lazyLoadingRemoteData";
import { SearchFilterAddItemExample } from "./examples/searchFilterAddNewItem";
import { EventsExample } from "./examples/events";
import { UsingInListExample } from "./examples/usingInList";
import { UsingWithinDialog } from "./examples/usingWithinDialog";

const appRoutes: Routes = [
  { path: "", redirectTo: "/basic", pathMatch: "full" },
  {
    path: "basic",
    component: BasicExample,
    data: {
      label: "Basic example",
      tstitle: "basic.ts",
      htmltitle: "basic.html",
      csstitle: "",
      tsgist: "CuppaLabs/ee72fbc7b21dad7e4e7664c5b1553235",
      htmlgist: "CuppaLabs/eb78d42ab7971fda6493586e329bfdb8",
      cssgist: false,
    },
  },
  {
    path: "singleselection",
    component: SingleSelectionExample,
    data: {
      label: "Single selection",
      tstitle: "singleSelection.ts",
      htmltitle: "singleSelection.html",
      csstitle: "",
      tsgist: "CuppaLabs/6ef578ce507dfd548eec39e008b4de14",
      htmlgist: "CuppaLabs/eb78d42ab7971fda6493586e329bfdb8",
      cssgist: false,
    },
  },
  {
    path: "searchfilter",
    component: SearchFilterExample,
    data: {
      label: "Search filter",
      tstitle: "searchFilter.ts",
      htmltitle: "searchFilter.html",
      csstitle: "",
      tsgist: "CuppaLabs/447bd5fce6dfc2832f5f4a8c36726a9b",
      htmlgist: "CuppaLabs/eb78d42ab7971fda6493586e329bfdb8",
      cssgist: false,
    },
  },
  {
    path: "customSearchAPI",
    component: CustomSearchExample,
    data: {
      label: "Custom Search from API",
      tstitle: "customSearch.ts",
      htmltitle: "customSearch.html",
      csstitle: "",
      tsgist: "CuppaLabs/1bab5ecbbb22727eb0afe49848a454f0",
      htmlgist: "CuppaLabs/7f0d8ea9f9cfe9eec2cc1699affd2c14",
      cssgist: false,
    },
  },
  {
    path: "searchFilterByOneProperty",
    component: SearchFilterByOnePropertyExample,
    data: {
      label: "Search Filter By Property",
      tstitle: "searchFilterByProperty.ts",
      htmltitle: "searchFilterByProperty.html",
      csstitle: "",
      tsgist: "CuppaLabs/f6acd1eb94c95df32f689260b1f38b4c",
      htmlgist: "CuppaLabs/eb78d42ab7971fda6493586e329bfdb8",
      cssgist: false,
    },
  },
  {
    path: "searchfilterAddNewItem",
    component: SearchFilterAddItemExample,
    data: {
      label: "Search and Add New Item",
      tstitle: "searchFilterAddNewItem.ts",
      htmltitle: "searchFilter.html",
      csstitle: "",
      tsgist: "CuppaLabs/c1e00c870c3e3b9213e69e0a93518cc6",
      htmlgist: "CuppaLabs/0583ba4be8b7c192d14f04375f96c074",
      cssgist: false,
    },
  },
  {
    path: "groupby",
    component: GroupByExample,
    data: {
      label: "Group By",
      tstitle: "groupBy.ts",
      htmltitle: "groupBy.html",
      csstitle: "",
      tsgist: "CuppaLabs/f6c1328ade3201042a4b4d268a30ad8c",
      htmlgist: "CuppaLabs/eb78d42ab7971fda6493586e329bfdb8",
      cssgist: false,
    },
  },
  {
    path: "templating",
    component: TemplatingExample,
    data: {
      label: "Templating",
      tstitle: "templating.ts",
      htmltitle: "templating.html",
      csstitle: "",
      tsgist: "CuppaLabs/cc0ac5976bf26b89119180ff82115fe4",
      htmlgist: "CuppaLabs/6399258d93fd5580be1736aba2539519",
      cssgist: false,
    },
  },
  {
    path: "usinginform",
    component: UsingWithFormExample,
    data: {
      label: "Using in Forms",
      tstitle: "using-in-forms.ts",
      htmltitle: "using-with-forms.html",
      csstitle: "",
      tsgist: "CuppaLabs/6cd9396b8f5589b792b27dd10efe9140",
      htmlgist: "CuppaLabs/8148509a46a59e3aba513808daa40ca1",
      cssgist: false,
    },
  },
  {
    path: "usinginreactiveform",
    component: UsingWithReactiveFormExample,
    data: {
      label: "Using in Reactive Forms",
      tstitle: "using-in-reactive-forms.ts",
      htmltitle: "using-with-reactive-forms.html",
      csstitle: "",
      tsgist: "CuppaLabs/f0dfe353c6378cee7f55547395a80fc4",
      htmlgist: "CuppaLabs/0a32c3d76110468b84bac01fd64488bc",
      cssgist: false,
    },
  },
  {
    path: "lazyloading",
    component: LazyLoadingExample,
    data: {
      label: "Virtual Scrolling",
      tstitle: "lazyLoading.ts",
      htmltitle: "lazyLoading.html",
      csstitle: "",
      tsgist: "CuppaLabs/aab6c8b30a6901af01249c474f3f0cbd",
      htmlgist: "CuppaLabs/c77fea947ef053aa22973fcd9c7c612a",
      cssgist: false,
    },
  },
  {
    path: "lazyloadingRemoteData",
    component: LazyLoadingRemoteDataExample,
    data: {
      label: "Lazy Loading from API",
      tstitle: "lazyLoadingRemoteData.ts",
      htmltitle: "lazyLoadingRemoteData.html",
      csstitle: "",
      tsgist: "CuppaLabs/3833720c12e23f6c8ee5fd870e38ad5b",
      htmlgist: "CuppaLabs/72ebd8cfa40a23a74ccbeda6de98a1e8",
      cssgist: false,
    },
  },
  {
    path: "remoteData",
    component: RemoteDataExample,
    data: {
      label: "Data from remote API",
      tstitle: "remoteData.ts",
      htmltitle: "remoteData.html",
      csstitle: "",
      tsgist: "CuppaLabs/ffb168ae28c36a9130ad5ce74b720c5d",
      htmlgist: "CuppaLabs/eb78d42ab7971fda6493586e329bfdb8",
      cssgist: false,
    },
  },
  {
    path: "usingInList",
    component: UsingInListExample,
    data: {
      label: "Using in List for loop",
      tstitle: "usingInList.ts",
      htmltitle: "usingInList.html",
      csstitle: "",
      tsgist: "CuppaLabs/0d2dc802967cca16ffc5053d0b873aba",
      htmlgist: "CuppaLabs/85fb2b925a56c2e533e321ae09de0e2f",
      cssgist: false,
    },
  },
  {
    path: "usingInDialog",
    component: UsingWithinDialog,
    data: {
      label: "Using Inside Dialog",
      tstitle: "basic.ts",
      htmltitle: "basic.html",
      csstitle: "",
      tsgist: "CuppaLabs/ee72fbc7b21dad7e4e7664c5b1553235",
      htmlgist: "CuppaLabs/eb78d42ab7971fda6493586e329bfdb8",
      cssgist: false,
    },
  },
  {
    path: "multipledropdowns",
    component: MultipleDropdownsExample,
    data: {
      label: "Multiple dropdowns",
      tstitle: "multiple-dropdowns.ts",
      htmltitle: "multiple-dropdowns.html",
      csstitle: "",
      tsgist: "CuppaLabs/12225540c23c8a171a81f996fc8d9ca6",
      htmlgist: "CuppaLabs/3788fb5437925b9d7d8edafec567639c",
      cssgist: false,
    },
  },
  {
    path: "dynamicdatasets",
    component: DynamicDataSetsExample,
    data: {
      label: "Load dynamic data",
      tstitle: "dynamicData.ts",
      htmltitle: "dynamicData.html",
      csstitle: "",
      tsgist: "CuppaLabs/302d580f91bc40611b2474558d98fbf2",
      htmlgist: "CuppaLabs/eb78d42ab7971fda6493586e329bfdb8",
      cssgist: false,
    },
  },
  {
    path: "dropdownMethods",
    component: ResetDropdownExample,
    data: {
      label: "Methods",
      tstitle: "resetDropdown.ts",
      htmltitle: "resetDropdown.html",
      csstitle: "",
      tsgist: "CuppaLabs/96d3ca7681f1a7a38b8c76b2f1552458",
      htmlgist: "CuppaLabs/bbd73b9f9864effb69f361c9fc65a6e5",
      cssgist: false,
    },
  },
  {
    path: "events",
    component: EventsExample,
    data: {
      label: "Events",
      tstitle: "basic.ts",
      htmltitle: "basic.html",
      csstitle: "",
      tsgist: "CuppaLabs/ee72fbc7b21dad7e4e7664c5b1553235",
      htmlgist: "CuppaLabs/eb78d42ab7971fda6493586e329bfdb8",
      cssgist: false,
    },
  },
  {
    path: "disablemode",
    component: DisableModeExample,
    data: {
      label: "Disable dropdown",
      tstitle: "disableMode.ts",
      htmltitle: "disableMode.html",
      csstitle: "",
      tsgist: "CuppaLabs/96f799302bdfa08e11b4420c86c1d720",
      htmlgist: "CuppaLabs/eb78d42ab7971fda6493586e329bfdb8",
      cssgist: false,
    },
  },
  {
    path: "limitselection",
    component: LimitSelectionExample,
    data: {
      label: "Limit selection",
      tstitle: "limitSelection.ts",
      htmltitle: "limitSelection.html",
      csstitle: "",
      tsgist: "CuppaLabs/70667b7d4dd4270bb290685e036a379a",
      htmlgist: "CuppaLabs/eb78d42ab7971fda6493586e329bfdb8",
      cssgist: false,
    },
  },
  {
    path: "limitbadges",
    component: LimitBadgesExample,
    data: {
      label: "Limit Badges",
      tstitle: "limitBadges.ts",
      htmltitle: "limitBadges.html",
      csstitle: "",
      tsgist: "CuppaLabs/00a25e7f8f70199f6571ac9fccbb94c2",
      htmlgist: "CuppaLabs/eb78d42ab7971fda6493586e329bfdb8",
      cssgist: false,
    },
  },
  {
    path: "customplaceholder",
    component: CustomPlaceholderExample,
    data: {
      label: "Custom placeholder",
      tstitle: "customPlaceholder.ts",
      htmltitle: "customPlaceholder.html",
      csstitle: "",
      tsgist: "CuppaLabs/48c087b6c0b4381d5bae1c689cc0ee3e",
      htmlgist: "CuppaLabs/eb78d42ab7971fda6493586e329bfdb8",
      cssgist: false,
    },
  },
  {
    path: "styling",
    component: StylingExample,
    data: {
      label: "CSS Styling",
      tstitle: "customStyling.ts",
      htmltitle: "customStyling.html",
      csstitle: "app.css",
      tsgist: "CuppaLabs/67fb11cbb67a62888ca0a3adb44ee440",
      htmlgist: "CuppaLabs/eb78d42ab7971fda6493586e329bfdb8",
      cssgist: "CuppaLabs/e6efeedade8f737df03107625df165e7",
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRouterModule {}
