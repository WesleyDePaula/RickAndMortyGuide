import { Component, OnInit } from '@angular/core';
import { EpisodeService } from 'src/app/core/services/episode/episode.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  headers: string[] = ['Title', 'Air Date', 'Episode', 'Characters']

  constructor(private episodeService: EpisodeService) { }

  ngOnInit(): void {
  }

  searchEpisode(event){
    this.episodeService.getMultiple(event).subscribe((value) => {

    })
  }

}
