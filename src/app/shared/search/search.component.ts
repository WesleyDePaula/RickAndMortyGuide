import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'shared-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output()
  searchEntity = new EventEmitter()

  inputValue: string

  constructor() { }

  ngOnInit(): void {
  }

  search(){

    const obj = {
      query: this.inputValue
    }

    this.searchEntity.emit(obj);
  }

}
