import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'eichfx-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations: [
    trigger('button', [
      state(
        'false',
        style({
          transform: 'translate(0,0)',
        })
      ),
      state(
        'hover',
        style({
          transform: 'translate(10%,0)',
        })
      ),
      transition('false => hover', animate('100ms ease-in')),
      transition('hover => false', animate('100ms ease-out')),
    ]),
  ],
})
export class MenuComponent implements OnInit {
  navMenu: any[] = [
    {
      label: 'Home',
      route: 'demoReel',
      hover: 'false',
    },
    {
      label: '3D CGI',
      route: 'breakdown',
      hover: 'false',
    },
    {
      label: 'HTML5 Canvas',
      route: 'research',
      hover: 'false',
    },
  ];

  @Output() activePane: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  setActivePane(item: any) {
    this.activePane.emit(item);
  }
}
