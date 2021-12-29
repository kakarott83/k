import { Component, OnInit } from '@angular/core';
import { Travel } from 'src/app/model/travel';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FirestoreService } from 'src/app/services/firestore.service';

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
  /*animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]*/
})
export class TravelListComponent implements OnInit {

  //columnToDisplay = ['start', 'end', 'customer', 'reason', 'id', 'delete']
  dataSource: Travel[] = [];
  //expandedElement!: Travel | null;
  countResult: number = 5;
  constructor(private _service: FirestoreService) { }

  ngOnInit(): void {
    this.getTravel(5);
  }

  getTravel(countResult?: number) {
      this._service.getTravels(countResult)
      .subscribe(data => {
        this.dataSource = data.map(e => {
          return {
            id: e.payload.doc.id,
            ...e.payload.doc.data() as Travel
          } as Travel
        });
      })
  }

  detailsTravel(id?: any) {
    console.log(id);
  }
  
  deleteTravel(id?: any) {
    this._service.deleteTravel(id);
  }

  loadMoreTravels() {
    this.countResult = this.countResult + 5;
    this.getTravel(this.countResult)
  }
}
