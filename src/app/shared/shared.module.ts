import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListComponent } from './list/list.component';
import { CoreModule } from '../core/core.module';
import { SearchComponent } from './search/search.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './sidebar/sidebar/sidebar.component';
import {SidebarModule} from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    ListComponent,
    SearchComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    ReactiveFormsModule, FormsModule,
    InputTextModule,
    SidebarModule,
    ButtonModule,
  ],
  exports: [SearchComponent, SidebarComponent]
})
export class SharedModule { }
