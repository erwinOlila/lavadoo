import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import * as firebase from 'firebase/app';
import { DataService } from '../shared/services/data.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  profile$: Observable<firebase.User>;
  uid: string;
  constructor(private auth: AuthService, private db: DataService) {
   }

  ngOnInit() {
  }

  logOut = (): void => {
    this.auth.logOut();
  }

}
