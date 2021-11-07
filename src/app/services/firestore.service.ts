import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Travel } from '../model/travel';

// const db = getFirestore();

@Injectable({
  providedIn: 'root'
})

export class FirestoreService {

  travels!: Observable<any[]>;

  constructor(
    private _firestore: AngularFirestore
  ) { }

  addTravel(travel: any) {
    return this._firestore.collection('travels').add(travel).then(
      resp => {
        console.log(resp.id, 'Service')
        return resp.id
      } 
    );
  }

  deleteTravel() {

  }

  getTravels() {
    return this._firestore.collection('travels').snapshotChanges();
  }



}
