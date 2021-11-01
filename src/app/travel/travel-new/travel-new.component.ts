import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { Spend } from 'src/app/model/spend';

@Component({
  selector: 'app-travel-new',
  templateUrl: './travel-new.component.html',
  styleUrls: ['./travel-new.component.scss']
})
export class TravelNewComponent implements OnInit {

  myTravelForm!: FormGroup;
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.myTravelForm = this.fb.group({
      start: '2021-10-30T08:00',
      end: '2021-10-31T21:15',
      customer: 'BANK-now',
      city: 'Horgen',
      reason: 'Vor Ort Betreuung',
      mySpend: this.fb.array([ this.createSpend() ]),
      checkIn: true,
      payOut: ''
    })
  }

  onSubmit() {
    console.log(this.myTravelForm.value);
    console.log(this.myTravelForm.value.start);
  }

  createSpend() {
    return this.fb.group({
      spendType: '',
      spendValue: ''
    })
  }

  addSpend() {
    const add = this.myTravelForm.get('mySpend') as FormArray;
    add.push(this.createSpend());
  }

  deleteSpend(spendIndex: number) {
    const add = this.myTravelForm.get('mySpend') as FormArray;
    add.removeAt(spendIndex);
  }

  getControls() {
    return (this.myTravelForm.get('mySpend') as FormArray).controls;
  }
}
