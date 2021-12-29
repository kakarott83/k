import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingComponent } from './admin/setting/setting.component';
import { ConfirmSignOutComponent } from './credentials/confirm-sign-out/confirm-sign-out.component';
import { ForgotPasswordComponent } from './credentials/forgot-password/forgot-password.component';
import { LoginComponent } from './credentials/login/login.component';
import { RegisterComponent } from './credentials/register/register.component';
import { VerifyEmailAddressComponent } from './credentials/verify-email-address/verify-email-address.component';
import { AuthGuard } from './services/auth.guard';
import { TravelDashboardComponent } from './travel/travel-dashboard/travel-dashboard.component';
import { TravelDetailComponent } from './travel/travel-detail/travel-detail.component';
import { TravelListComponent } from './travel/travel-list/travel-list.component';
import { TravelNewComponent } from './travel/travel-new/travel-new.component';
import { UserComponent } from './user/user/user.component';
import { WelcomeComponent } from './welcome/welcome/welcome.component';

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'welcome', component: WelcomeComponent},
  { path: 'dashboard', component: TravelDashboardComponent, canActivate: [AuthGuard]}, //canActivate: [AuthGuard], 
  { path: 'forgot-password', component: ForgotPasswordComponent},
  { path: 'verfify-email', component: VerifyEmailAddressComponent},
  { path: 'travel-new', component: TravelNewComponent},
  { path: 'travel-list', component: TravelListComponent},
  { path: 'travel-detail/:id', component: TravelDetailComponent},
  { path: 'setting', component: SettingComponent},
  { path: 'sign-out', component: ConfirmSignOutComponent},
  { path: 'user', component: UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
