import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  headers: string[] = ['Title', 'Air Date', 'Episode', 'Characters']

  constructor() { }

  ngOnInit(): void {
  }

}
