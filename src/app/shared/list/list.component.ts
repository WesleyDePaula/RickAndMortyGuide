import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from 'src/app/core/services/character/character.service';

@Component({
  selector: 'shared-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input()
  headers: string[]

  @Output()
  entitiesEmit = new EventEmitter();

  entities: any[];

  keys: string[];

  constructor(private activatedRoute: ActivatedRoute, private characterService: CharacterService) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((value) =>{
      this.entities = value['entity']['results']
      console.log(this.entities)

    });

    this.keys = Object.keys(this.entities[0])
    this.keys = this.keys.filter(key => key !== 'url' && key !== 'created' && key !== 'id' && key !== 'characters' && key !== 'residents')

  }

}
