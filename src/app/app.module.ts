import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {RegistrationFormComponent} from './components/registration-form/registration-form.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RestService} from './services/rest.service';
import {LoginComponent} from './components/login/login.component';
import {JwtHelperService, JwtModule} from '@auth0/angular-jwt';
import {CertificateRequestPageComponent} from './components/certificate-request-page/certificate-request-page.component';
import {CertificatesPageComponent} from './components/certificates-page/certificates-page.component';
import {TableComponent} from './components/table/table.component';
import {ProfileComponent} from './components/profile/profile.component';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatDialog, MatDialogModule} from '@angular/material';
import {Overlay} from '@angular/cdk/overlay';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CertificateModalBootstrapComponent} from './components/certificate-modal-bootstrap/certificate-modal-bootstrap.component';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    RegistrationFormComponent,
    LoginComponent,
    CertificateRequestPageComponent,
    CertificatesPageComponent,
    TableComponent,
    ProfileComponent,
    CertificateModalBootstrapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpModule,
    JwtModule,
    MatDialogModule,
    BrowserAnimationsModule,
    NgbModalModule
  ],
  entryComponents: [
    CertificateModalBootstrapComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
