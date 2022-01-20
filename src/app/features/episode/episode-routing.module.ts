import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';

import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Episode } from 'src/app/core/model/episode';
import { EpisodeService } from 'src/app/core/services/episode/episode.service';

@Injectable()
export class EpisodesResolver implements Resolve<Episode[]> {
  constructor(private episodeService: EpisodeService) { }

  resolve() {
    return this.episodeService.all();
  }
}

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
    resolve: {
      entity: EpisodesResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [EpisodesResolver]
})
export class EpisodeRoutingModule { }
