import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from 'src/app/core/model/character';
import { CharacterService } from 'src/app/core/services/character/character.service';

@Component({
  selector: 'shared-full-list',
  templateUrl: './full-list.component.html',
  styleUrls: ['./full-list.component.scss']
})
export class FullListComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private characterService: CharacterService) { }
  @Input()
  headers = []

  entity

  keys: string[]

  characters: Character[]

  ids: number[] = []

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((value: any) => {
      this.entity = value['entity'];
    })

    this.keys = Object.keys(this.entity)

    this.keys = this.keys.filter(key => key !== 'url' && key !== 'created' && key !== 'id' && key !== 'characters' && key !== 'residents')

    this.getIdCharacter()

    this.characterService.getMultiple(this.ids).subscribe((value: any) => {
      this.characters = value;
    })

  }

  getIdCharacter() {
    for (let i = 0; i < this.entity.characters.length; i++) {
      let url = this.entity.characters[i]
      let id: number = parseInt(url.slice(42, url.length))
      console.log(id)
      this.ids.push(id)
    }

  }

  goToCharacter(id: number) {
    this.router.navigate(['character', id])
  }

}
