import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'character',
    pathMatch: 'full'
  },
  {
    path: 'character',
    loadChildren: async () =>
    import('./character/character.module').then((m) => m.CharacterModule)
  },
  {
    path: 'episode',
    loadChildren: async () =>
    import('./episode/episode.module').then((m) => m.EpisodeModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
