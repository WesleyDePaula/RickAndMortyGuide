import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LazyLoadEvent, PrimeNGConfig } from 'primeng/api';
import { Character } from 'src/app/core/model/character';
import { Pageable } from 'src/app/core/model/pageable';
import { CharacterService } from 'src/app/core/services/character/character.service';

@Component({
  selector: 'character-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  headers = ['', 'Name', 'Specie', 'Gender']

  inputValue: string

  characters: Character[]

  display: boolean

  color

  constructor(private primengConfig: PrimeNGConfig, private characterService: CharacterService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((value) => {
      this.characters = value['characters']['results'];
    });

    this.primengConfig.ripple = true;

  }

  goToCharacter(id: number) {
    this.router.navigate([id], { relativeTo: this.activatedRoute })
  }

  searchCharacter(event) {
    this.characterService.all(event).subscribe((character) => {
      this.characters = character['results']
    })
  }

  loadCharacters(event: LazyLoadEvent){

    const page: Pageable = {
      page: event.first / 10,
      size: event.rows
    }

    this.characterService.getPaginated(page).subscribe((value) => {
      console.log(value['results'])
      this.characters = value['results'];
    })

  }

}
