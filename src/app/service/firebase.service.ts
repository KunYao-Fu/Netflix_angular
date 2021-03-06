import { filter, map, take, switchMap, tap } from 'rxjs/operators';
import { Subject, ReplaySubject, of, Subscription } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    private $firebaseStore: AngularFirestore
  ) {
  }

  public addCollectionListener(name: string, fun: any) {
    return this.$firebaseStore.collection(name).snapshotChanges().subscribe(
      res => fun(res.map(_ => _.payload.doc.data()))
    );
  }

  public removeCollectionListener(listenter: Subscription) {
    listenter.unsubscribe();
  }

  public collection(name: string) {
    const errorHandler = (error) => {
      throw error;
    };
    return {
      create: (data: any) => this.$firebaseStore
        .collection(name)
        .add(data)
        .catch(error => errorHandler(error)),
      read$: this.$firebaseStore.collection(name).snapshotChanges().pipe(
        take(1),
        tap(_ => console.log(_)),
        map(res => res.map(item => ({ id: item.payload.doc.id, data: item.payload.doc.data() })))
      ),
      update: (id: string, data: any) => this.$firebaseStore
        .collection(name)
        .doc(id)
        .update(data)
        .catch(error => errorHandler(error)),
      delete: (id: string) => this.$firebaseStore
        .collection(name)
        .doc(id)
        .delete()
        .catch(error => errorHandler(error))
    };
  }

  public document(name: string, id: string) {
    const doc = this.$firebaseStore.collection(name).doc(id);
    return {
      create: (data: any) => doc.set(data),
      read$: () => doc.get(),
      update: (data: any) => doc.set(data, { merge: true }),
    };
  }
}
