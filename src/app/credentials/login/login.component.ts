import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

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
