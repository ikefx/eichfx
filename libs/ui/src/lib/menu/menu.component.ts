import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'eichfx-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  mockButtons: number[] = [1, 2, 3, 4, 5];

  constructor() { }

  ngOnInit(): void {
  }

}
