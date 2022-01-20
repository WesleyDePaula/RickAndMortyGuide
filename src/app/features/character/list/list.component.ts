import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from 'src/app/core/model/character';
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

  constructor(private characterService: CharacterService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((value) => {
      this.characters = value['characters']['results'];
    });
  }

  goToCharacter(id: number) {
    this.router.navigate([id], { relativeTo: this.activatedRoute })
  }

  searchCharacter(event){
    this.characterService.all(event).subscribe((character) => {
      this.characters = character['results']
    })
  }

}
