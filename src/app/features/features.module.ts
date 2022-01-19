import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { CharacterModule } from './character/character.module';
import { EpisodeModule } from './episode/episode.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    CharacterModule,
    EpisodeModule,
  ]
})
export class FeaturesModule { }
