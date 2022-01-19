import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from 'src/app/core/model/character';

@Component({
  selector: 'character-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  characters: Character[]

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((value) => {
      this.characters = value['characters']['results'];
    });
  }

  goToCharacter(id: number) {
    console.log(id);
    this.router.navigate([id], { relativeTo: this.activatedRoute })
  }


}
