import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterRoutingModule } from './character-routing.module';
import { ListComponent } from './list/list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FullListComponent } from './full-list/full-list.component';


@NgModule({
  declarations: [
    ListComponent,
    FullListComponent
  ],
  imports: [
    CommonModule,
    CharacterRoutingModule,
    SharedModule,
    CharacterRoutingModule
  ]
})
export class CharacterModule { }
