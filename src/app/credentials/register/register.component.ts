import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  myUser: User = {
    lastname: 'Mustermann',
    firstname: 'Max',
    email: 'test@test.de',
    password: 'abc123'

  }

  constructor() { }

  ngOnInit(): void {
  }

}
