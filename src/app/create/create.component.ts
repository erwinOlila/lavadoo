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
      location:         new FormControl()
    });
   }

  ngOnInit() {
  }

  onSubmit = (): void => {
    const data: User = this.user_details.value;
    this.auth.form_data = data;
    this.auth.addUser(data.email, data.password);
  }
}
