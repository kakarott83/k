import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingComponent } from './admin/setting/setting.component';
import { ConfirmSignOutComponent } from './credentials/confirm-sign-out/confirm-sign-out.component';
import { TravelDashboardComponent } from './travel/travel-dashboard/travel-dashboard.component';
import { TravelDetailComponent } from './travel/travel-detail/travel-detail.component';
import { TravelListComponent } from './travel/travel-list/travel-list.component';
import { TravelNewComponent } from './travel/travel-new/travel-new.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: TravelDashboardComponent},
  { path: 'travel-new', component: TravelNewComponent},
  { path: 'travel-list', component: TravelListComponent},
  { path: 'travel-detail/:id', component: TravelDetailComponent},
  { path: 'setting', component: SettingComponent},
  { path: 'sign-out', component: ConfirmSignOutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
