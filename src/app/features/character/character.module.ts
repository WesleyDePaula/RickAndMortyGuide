import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterRoutingModule } from './character-routing.module';
import { ListComponent } from './list/list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FullListComponent } from './full-list/full-list.component';
import {AvatarModule} from 'primeng/avatar';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';


@NgModule({
  declarations: [
    ListComponent,
    FullListComponent
  ],
  imports: [
    CommonModule,
    CharacterRoutingModule,
    SharedModule,
    CharacterRoutingModule,
    AvatarModule,
    TableModule,
    ButtonModule
  ]
})
export class CharacterModule { }
