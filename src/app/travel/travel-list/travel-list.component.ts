import { Component, OnInit } from '@angular/core';
import { Travel } from 'src/app/model/travel';
import {animate, state, style, transition, trigger} from '@angular/animations';

const ELEMENT_TRAVELS: Travel[] = [
  {
    start: '2021-10-30T08:00',
    end: '2021-10-31T21:15',
    customer: 'BANK-now',
    city: 'Horgen',
    reason: 'Vor Ort Betreuung',
    checkIn: true,
    payOut: false,
    mySpend: [{type: 'Hotel', value: 50}, {type: 'Taxi', value: 15}]
  },
  {
    start: '2021-10-30T08:00',
    end: '2021-10-31T21:15',
    customer: 'Oberbank',
    city: 'Linz',
    reason: 'Workshop',
    checkIn: false,
    payOut: false
  }
]
@Component({
  selector: 'app-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class TravelListComponent implements OnInit {

  columnToDisplay = ['start', 'end', 'customer', 'reason', 'id', 'delete']
  dataSource = ELEMENT_TRAVELS;
  expandedElement!: Travel | null;
  constructor() { }

  ngOnInit(): void {
  }

}
