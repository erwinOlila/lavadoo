import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { User } from '../shared/interfaces/interface';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  user_details: FormGroup;
  constructor (private auth: AuthService) {
    this.user_details = new FormGroup({
      first:            new FormControl(),
      last:             new FormControl(),
      email:            new FormControl(),
      password:         new FormControl(),
      password_2:       new FormControl(),
      number:           new FormControl(),
      location:         new FormControl(),
      lat:              new FormControl(),
      long:             new FormControl()
    });
   }

  ngOnInit() {
  }

  onSubmit = (): void => {
    const data: User = this.user_details.value;
    this.auth.form_data = data;
    this.auth.addUser(data.email, data.password);
  }

  getLocation = (): void => {
    if (confirm('Allow this site to access your current location?')) {
      window.navigator.geolocation.getCurrentPosition(pos => {
        console.log(pos.coords);
        this.user_details.value.lat  = pos.coords.latitude;
        this.user_details.value.long = pos.coords.longitude;
        console.log(this.user_details.value);
      }, err => {
        console.log(err);
      });
    }
  }
}


