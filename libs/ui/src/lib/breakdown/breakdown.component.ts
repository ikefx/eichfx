import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'eichfx-breakdown',
  templateUrl: './breakdown.component.html',
  styleUrls: ['./breakdown.component.css'],
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

export class BreakdownComponent implements OnInit {

  zBrushRenderman: any[] = [
    {
      label: 'Terracotta',
      hover: 'false'
    },
    {
      label: 'Hachiman',
      hover: 'false'
    }
  ];

  researchRenderman: any[] = [
    {
      label: 'AOVs',
      hover: 'false'
    },
    {
      label: 'Point Clouds',
      hover: 'false'
    },
    {
      label: 'Volumetrics',
      hover: 'false'
    },
    {
      label: 'Subsurface Scattering',
      hover: 'false'
    },
    {
      label: 'Magic Lights',
      hover: 'false'
    }
  ];

  researchZBrush: any[] = [
    {
      label: 'ZBrush Export',
      hover: 'false'
    },
    {
      label: 'MatCap Texture',
      hover: 'false'
    }
  ];

  researchVue: any[] = [
    {
      label: 'USGS DEM Import',
      hover: 'false'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
