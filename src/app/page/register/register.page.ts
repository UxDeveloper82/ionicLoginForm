import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  name?: string;
  email?: string;
  password?: string;
  constructor() { }

  ngOnInit() {
  }

  register() {
    if (this.name && this.email && this.password) {
      // You can implement the registration logic here
      console.log('Registration successful');
    } else {
      console.log('Please fill in all fields.');
    }
  }

}
