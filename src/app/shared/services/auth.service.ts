import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { User } from '../interfaces/interface';
import { DataService } from './data.service';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {
  state$: Observable<firebase.User>;
  user:   firebase.User;
  form_data: User;

  constructor(public afAuth: AngularFireAuth, private db: DataService, private router: Router ) {
    this.state$ = afAuth.authState;
    this.state$.subscribe(user => {
      if (user) {
        this.user = user;
        if ((user.displayName === null) && (this.form_data !== undefined)) {
          user.updateProfile({
            displayName: this.form_data.first + ' ' + this.form_data.last,
            photoURL: 'https://placeimg.com/400/400/animals'
          }).then(() => {
            this.db.afDb.object('users/' + user.uid).set({
              id: user.uid,
              displayName: user.displayName,
              photoURL: user.photoURL,
              location: this.form_data.location,
              email: user.email,
              join: user.metadata.creationTime,
              online: true
            });
          }).catch(err => {
            console.log(err);
          });
        }
        if (!user.emailVerified) {
          user.sendEmailVerification().then(() => {
            console.log('email sent');
          }).catch(err => {
            console.log(err);
          });
        } else {
          this.router.navigate(['/dashboard']);
        }
      }
    });
   }

  addUser = (email: string, password: string): void => {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
    .then(user => {
    }).catch(err => {
      console.log(err);
    });
  }

  logOut = (): void => {
    this.db.afDb.object('users/' + this.user.uid).update({
      online: false
    });
    this.afAuth.auth.signOut();
    this.router.navigate(['/']);
  }
}
