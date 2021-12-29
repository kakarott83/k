import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  myRegisterForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {

    this.myRegisterForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['']
    })

    this.myRegisterForm.patchValue({
      firstName: 'John',
      lastName: 'Doe',
      email: 'ml@milan-muc.de',
      password: 'abc123',
      confirmPassword: 'abc123'
    })
  }

  onSubmit() {
    console.log(this.myRegisterForm.value);
    this.authService.SignUp(this.myRegisterForm.value.email, this.myRegisterForm.value.password)
    //this.authService.login(this.myRegisterForm.value);
  }

}
