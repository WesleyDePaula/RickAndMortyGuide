import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from 'src/app/core/services/character.service';

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

  }

}
