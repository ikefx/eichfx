import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'eichfx-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

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

  @Output() activePane: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  setActivePane(item: any) {
    this.activePane.emit(item);
  }

}
