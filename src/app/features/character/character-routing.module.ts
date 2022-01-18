import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';

import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Character } from 'src/app/core/model/character';
import { CharacterService } from 'src/app/core/services/character.service';

@Injectable()
export class CharactersDataResolver implements Resolve<Character[]> {
  constructor(private characterService: CharacterService){}

  resolve() {
    return this.characterService.all();
  }
}

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
    resolve: {
      entities: CharactersDataResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [CharactersDataResolver]
})
export class CharacterRoutingModule { }
