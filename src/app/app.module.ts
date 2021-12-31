import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MediaMatcher } from '@angular/cdk/layout';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './credentials/login/login.component';
import { RegisterComponent } from './credentials/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navigate/navbar/navbar.component';
import { TravelListComponent } from './travel/travel-list/travel-list.component';
import { TravelDetailComponent } from './travel/travel-detail/travel-detail.component';
import { TravelNewComponent } from './travel/travel-new/travel-new.component';
import { TravelDashboardComponent } from './travel/travel-dashboard/travel-dashboard.component';
import { SettingComponent } from './admin/setting/setting.component';
import { ConfirmSignOutComponent } from './credentials/confirm-sign-out/confirm-sign-out.component';
import { UserComponent } from './user/user/user.component';
import { ForgotPasswordComponent } from './credentials/forgot-password/forgot-password.component';
import { VerifyEmailAddressComponent } from './credentials/verify-email-address/verify-email-address.component';
import { WelcomeComponent } from './welcome/welcome/welcome.component';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getFunctions, provideFunctions} from '@angular/fire/functions';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    TravelListComponent,
    TravelDetailComponent,
    TravelNewComponent,
    TravelDashboardComponent,
    SettingComponent,
    ConfirmSignOutComponent,
    UserComponent,
    ForgotPasswordComponent,
    VerifyEmailAddressComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatTableModule,
    MatCheckboxModule,
    // provideFirebaseApp(() => initializeApp(environment.firebase)),
    // provideFirestore(() => getFirestore()),
    // provideFunctions(() => getFunctions()),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireModule

  ],
  providers: [MediaMatcher],
  bootstrap: [AppComponent]
})
export class AppModule { }
