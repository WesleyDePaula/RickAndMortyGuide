import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from 'src/app/core/model/character';
import { Episode } from 'src/app/core/model/episode';
import { EpisodeService } from 'src/app/core/services/episode/episode.service';

@Component({
  selector: 'app-full-list',
  templateUrl: './full-list.component.html',
  styleUrls: ['./full-list.component.scss']
})
export class FullListComponent implements OnInit {

   character: Character;

  episodes = []

  ids: number[] = []

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private episodeService: EpisodeService) { }

  ngOnInit(): void {

    this.activatedRoute.data.subscribe((value) => {
      this.character = value['character'];
    });

    this.setIds()

    this.episodeService.getMultiple(this.ids).subscribe((value) => {
      console.log(value)
      if(value.length > 1){
      this.episodes = value;
      }else{
        this.episodes.push(value)
      }
    })

  }

  setIds(){
    for (let i = 0; i < this.character.episode.length; i++) {
      let url = this.character.episode[i]
      let id: number = parseInt(url.slice(40, url.length))
      this.ids.push(id)
    }
  }

  goToEpisode(id: number){
    this.router.navigate(['episode', id])
  }

}
