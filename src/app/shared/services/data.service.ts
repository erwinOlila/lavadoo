import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Injectable()
export class DataService {

  constructor(public afDb: AngularFireDatabase) { }

  getUser = (path: string): AngularFireObject<firebase.User> => {
    return this.afDb.object<firebase.User>(path);
  }
}

