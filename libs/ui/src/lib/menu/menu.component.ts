import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'eichfx-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations: [
    trigger('button', [
      state('false', style({
        transform: 'translate(0,0)'
      })),
      state('hover', style({
        transform: 'translate(10%,0)'
      })),
      transition('false => hover', animate('100ms ease-in')),
      transition('hover => false', animate('100ms ease-out'))
    ])
  ]
})
export class MenuComponent implements OnInit {

  navMenu: any[] = [
    {
      label: 'Demo Reel',
      route: 'demoReel',
      hover: 'false'
    },
    {
      label: 'Breakdown',
      route: 'breakdown',
      hover: 'false'
    },
    {
      label: 'Research',
      route: 'research',
      hover: 'false'
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
