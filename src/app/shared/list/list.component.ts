import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterService } from 'src/app/core/services/character/character.service';
import { EpisodeService } from 'src/app/core/services/episode/episode.service';

@Component({
  selector: 'shared-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input()
  headers: string[]

  entities: any[];

  keys: string[];

  constructor(private episodeService: EpisodeService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((value) =>{
      this.entities = value['entity']['results']
      console.log(this.entities)

    });

    this.keys = Object.keys(this.entities[0])
    this.keys = this.keys.filter(key => key !== 'url' && key !== 'created' && key !== 'id' && key !== 'characters' && key !== 'residents')

  }

  goToEpisode(id: number){
    this.router.navigate([id], {relativeTo: this.activatedRoute})
  }

  searchEpisode(event){
    this.episodeService.all(event).subscribe((value) => {
      this.entities = value['results']
    })
  }

}
