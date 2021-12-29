import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-travel-dashboard',
  templateUrl: './travel-dashboard.component.html',
  styleUrls: ['./travel-dashboard.component.scss']
})
export class TravelDashboardComponent implements OnInit {

  public user: User | undefined;

  constructor(
    public authService: AuthService
  ) {  }

  ngOnInit(): void {
    this.getUser();
    console.log(this.user, 'Dashboard User');
  }

  getUser() {
    this.user = this.authService.getCurrentUser();
  }

}
