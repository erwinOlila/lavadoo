import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  login_details: FormGroup;
  constructor(private auth: AuthService) {
    this.login_details = new FormGroup({
      email:             new FormControl(),
      password:          new FormControl()
    });
   }

  ngOnInit() {
  }

  login = (): void => {
    this.auth.login(this.login_details.value.email, this.login_details.value.password);
  }
}
