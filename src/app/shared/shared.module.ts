import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListComponent } from './list/list.component';
import { CoreModule } from '../core/core.module';
import { SearchComponent } from './search/search.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    ReactiveFormsModule, FormsModule,
    InputTextModule
  ],
  exports: [SearchComponent]
})
export class SharedModule { }
