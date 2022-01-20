import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';

import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Episode } from 'src/app/core/model/episode';
import { EpisodeService } from 'src/app/core/services/episode/episode.service';
import { FullListComponent } from './full-list/full-list.component';

@Injectable()
export class EpisodesResolver implements Resolve<Episode[]> {
  constructor(private episodeService: EpisodeService) { }

  resolve() {
    return this.episodeService.all();
  }
}

@Injectable()
export class EpisodeResolver implements Resolve<Episode> {
  constructor(private episodeService: EpisodeService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.episodeService.getOne(route.params['id']);

  }
}


const routes: Routes = [
  {
    path: '',
    component: ListComponent,
    resolve: {
      entity: EpisodesResolver
    }
  },
  {
    path: ':id',
    component: FullListComponent,
    resolve: {
      entity:EpisodeResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [EpisodesResolver, EpisodeResolver]
})
export class EpisodeRoutingModule { }
