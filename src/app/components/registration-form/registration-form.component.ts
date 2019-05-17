import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {RestService} from '../../services/rest.service';
import {User} from '../../models/user';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  registrationForm = new FormGroup(
    {
      username: new FormControl('username'),
      email: new FormControl('email'),
      password: new FormControl('password'),
      confirmPassword: new FormControl('confirmPassword')
    }
  );

  constructor(private rest: RestService) {
  }

  ngOnInit() {
  }

  public checkPasswords() {
    return this.registrationForm.getRawValue().password === this.registrationForm.getRawValue().confirmPassword;
  }

  public register() {
    const temp = this.registrationForm.getRawValue();
    const user = new User(temp.username, temp.email, temp.password);
    this.rest.registerUser(user).subscribe((
      data => {
        console.log(data);
      })
    );
  }

}
