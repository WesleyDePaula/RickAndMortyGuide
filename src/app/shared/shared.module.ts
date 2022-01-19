import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListComponent } from './list/list.component';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    CoreModule
  ],
  exports: [ListComponent]
})
export class SharedModule { }
