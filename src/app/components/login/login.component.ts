import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {TrimmedUser, User} from '../../models/user';
import {RestService} from '../../services/rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private authToken;

  loginForm = new FormGroup(
    {
      username: new FormControl('username'),
      password: new FormControl('password'),
    }
  );

  constructor(private rest: RestService) {
  }

  ngOnInit() {
  }

  public login() {
    const temp = this.loginForm.getRawValue();
    const user = new TrimmedUser(temp.username, temp.password);
    this.rest.login(user).subscribe(
      data => {
        this.authToken = data['body'];
        console.log(this.authToken);
      });
  }
}
