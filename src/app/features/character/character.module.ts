import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterRoutingModule } from './character-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import {AvatarModule} from 'primeng/avatar';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { FullListComponent } from './full-list/full-list.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    ListComponent,
    FullListComponent

  ],
  imports: [
    CommonModule,
    CharacterRoutingModule,
    SharedModule,
    AvatarModule,
    TableModule,
    ButtonModule,
    InputTextModule,
  ]
})
export class CharacterModule { }
