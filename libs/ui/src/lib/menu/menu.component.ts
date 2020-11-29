import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'eichfx-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  mockButtons: number[] = [1, 2, 3, 4, 5];

  navMenu: any[] = [
    {
      label: 'Demo Reel',
      route: 'demoReel'
    },
    {
      label: 'Breakdown',
      route: 'breakdown'
    },
    {
      label: 'Research',
      route: 'research'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
