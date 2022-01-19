import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { CharacterModule } from './character/character.module';
import { EpisodeModule } from './episode/episode.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    CharacterModule,
    EpisodeModule,
    SharedModule
  ],
  exports: []
})
export class FeaturesModule { }
