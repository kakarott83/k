import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Spend } from 'src/app/model/spend';
import { Travel } from 'src/app/model/travel';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-travel-new',
  templateUrl: './travel-new.component.html',
  styleUrls: ['./travel-new.component.scss']
})
export class TravelNewComponent implements OnInit {

  myTravelForm!: FormGroup;
  travels!: Travel[];

  
  constructor(
    private fb: FormBuilder,
    private _service: FirestoreService
    ) { }

  ngOnInit(): void {

    this.myTravelForm = this.fb.group({
      start: ['2021-10-30T08:00',Validators.required],
      end: ['2021-10-31T21:15',Validators.required],
      customer: ['BANK-now',Validators.required],
      city: ['Horgen',Validators.required],
      reason: ['Vor Ort Betreuung',Validators.required],
      mySpend: this.fb.array([ this.createSpend() ]),
      checkIn: true,
      payOut: ''
    })

    // this.getTravels();


  }

  onSubmit() {
    console.log(this.myTravelForm.value);
    console.log(this.myTravelForm.value.start);
    //this._service.addTravel(this.myTravelForm.value)
    //  .then(resp => console.log(resp,'Gui'))
    //  .catch(e => console.log(e, 'Fehler'));
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

  getTravels() {
    this._service.getTravels()
      .subscribe(data => {
          this.travels = data.map(e => {
            return {
              id: e.payload.doc.id,
              ...e.payload.doc.data() as Travel
            } as Travel
          })
        }
    )
  }

  getControls() {
    return (this.myTravelForm.get('mySpend') as FormArray).controls;
  }
}
