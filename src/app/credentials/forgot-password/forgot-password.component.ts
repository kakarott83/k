import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  myForgotPasswordForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.myForgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    console.log(this.myForgotPasswordForm.value)
    this.router.navigate(['sign-in'])
  }
}
