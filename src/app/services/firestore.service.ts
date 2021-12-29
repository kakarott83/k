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

  deleteTravel(id: string) {

    console.log(id,'Delete');
      this._firestore.collection('travels').doc(id).delete().then(() => {
        console.log('Dokument gelöscht');
      }).catch((err) => {
        console.error('Fehler bei löschen', err);
      });
    
  }

  getTravels(countResult?: number) {
    const counts: number = countResult == null ? 5 : countResult
    if(countResult == null) {
      countResult = 5;
    }
    return this._firestore
      .collection('travels', 
        ref => ref
          .limit(counts)
          .orderBy('start','desc')
      )
      .snapshotChanges();
  }



}
