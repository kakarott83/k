import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-travel-dashboard',
  templateUrl: './travel-dashboard.component.html',
  styleUrls: ['./travel-dashboard.component.scss']
})
export class TravelDashboardComponent implements OnInit {

  userForm!: FormGroup
  public user: User | undefined;

  constructor(
    public authService: AuthService,
    public fb: FormBuilder
  ) {  }

  ngOnInit(): void {
    this.getUser();
    console.log(this.user, 'Dashboard User');

    this.userForm = this.fb.group({
      email: new FormControl({
        value: this.user?.email,
        disabled: true
      }),
      verifiedEmail: new FormControl({
        value: this.user?.emailVerified,
        disabled: true
      }),
      displayName: new FormControl({
        value: this.user?.displayName == null ? '' : this.user?.displayName,
        disabled: false
      }),
      uid: new FormControl({
        value: this.user?.uid,
        disabled: true
      })
    })

    console.log(this.user?.displayName, 'Form');
  }

  getUser() {
    this.user = this.authService.getCurrentUser();
  }

  onSubmit() {
    this.authService.updateProfil(this.userForm.value.displayName);
  }

}
