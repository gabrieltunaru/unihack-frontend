import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {RegistrationFormComponent} from './components/registration-form/registration-form.component';
import {LoginComponent} from './components/login/login.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'register', component: RegistrationFormComponent},
  {path: 'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
