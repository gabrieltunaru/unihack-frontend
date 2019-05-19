import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {TrimmedUser, User} from '../../models/user';
import {RestService} from '../../services/rest.service';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private authToken;
  private helper = new JwtHelperService();
  private role;
  loginForm = new FormGroup(
    {
      username: new FormControl(),
      password: new FormControl(),
    }
  );

  constructor(private rest: RestService,
              private router: Router) {
  }

  ngOnInit() {
  }

  public login() {
    localStorage.removeItem('jwt');
    localStorage.clear();
    const temp = this.loginForm.getRawValue();
    const user = new TrimmedUser(temp.username, temp.password);
    this.rest.login(user).subscribe(
      data => {
        this.authToken = data['body'];
        this.role = this.helper.decodeToken(this.authToken);
        console.log(this.authToken);
        console.log(this.role);
        localStorage.setItem('jwt', this.authToken);
        this.rest.setHttpOptions();
      });
    this.router.navigateByUrl('/home');
    this.rest.setHttpOptions();
  }
}
