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
import {TableModule} from 'primeng/table';
import { FullListComponent } from './full-list/full-list.component';
import {AvatarModule} from 'primeng/avatar';

@NgModule({
  declarations: [
    ListComponent,
    SearchComponent,
    SidebarComponent,
    FullListComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    ReactiveFormsModule, FormsModule,
    InputTextModule,
    SidebarModule,
    ButtonModule,
    TableModule,
    AvatarModule
  ],
  exports: [SearchComponent, SidebarComponent, ListComponent, FullListComponent]
})
export class SharedModule { }
