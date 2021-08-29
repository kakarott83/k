import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-travel-new',
  templateUrl: './travel-new.component.html',
  styleUrls: ['./travel-new.component.scss']
})
export class TravelNewComponent implements OnInit {

  customers: any = [
    {name: 'Bank-now'},
    {name: 'Toyota'}
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
