import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss']
})
export class PosterComponent implements OnInit {

  public hover: string = '';

  constructor() { }

  ngOnInit(): void {
    // this.toggleImageGroup();
  }


  toggleImageGroup(): void {
    this.hover = '-hover';
  }
}
