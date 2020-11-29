import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'eichfx-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  @Input() activePane: any;

  constructor() { }

  ngOnInit(): void {
  }

}
