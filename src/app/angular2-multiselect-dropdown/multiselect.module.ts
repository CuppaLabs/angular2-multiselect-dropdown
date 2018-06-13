import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ClickOutsideDirective, SetPositionDirective, ScrollDirective, StylePropDirective } from "./directives";
import { ListFilterPipe } from "./pipes";
import { BadgeComponent, ItemComponent, SearchComponent, TemplateRendererComponent } from "./components";
import { AngularMultiSelect } from "./multiselect.component";
import { MultiSelectConfig } from "./multiselect.config";

@NgModule({
  imports: [CommonModule, FormsModule],
  providers: [
    MultiSelectConfig
  ],
  declarations: [
    AngularMultiSelect,
    ClickOutsideDirective,
    ScrollDirective,
    StylePropDirective,
    ListFilterPipe,
    BadgeComponent,
    ItemComponent,
    SearchComponent,
    TemplateRendererComponent,
    SetPositionDirective,
  ],
  exports: [
    AngularMultiSelect,
    ClickOutsideDirective,
    ScrollDirective,
    StylePropDirective,
    ListFilterPipe,
    BadgeComponent,
    ItemComponent,
    SearchComponent,
    TemplateRendererComponent,
    SetPositionDirective
  ]
})
export class AngularMultiSelectModule { }
