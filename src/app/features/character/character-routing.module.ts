import { NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';

import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Character } from 'src/app/core/model/character';
import { CharacterService } from 'src/app/core/services/character.service';
import { FullListComponent } from './full-list/full-list.component';
import { Observable } from 'rxjs';

@Injectable()
export class CharactersDataResolver implements Resolve<Character[]> {
  constructor(private characterService: CharacterService) { }

  resolve() {
    return this.characterService.all();
  }
}

@Injectable()
export class CharacterDataResolver implements Resolve<Character> {
  constructor(private characterService: CharacterService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Character> {
    return this.characterService.getOne(route.params['id']);
  }
}

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
    resolve: {
      characters: CharactersDataResolver
    }
  },
  {
    path: ':id',
    component: FullListComponent,
    resolve: {
      character: CharacterDataResolver
    }
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [CharactersDataResolver, CharacterDataResolver]
})
export class CharacterRoutingModule { }
