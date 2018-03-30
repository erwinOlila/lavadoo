import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  user_details: FormGroup;
  constructor() {
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

  onSubmit () {
    console.log('clicked');
  }

}
