import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {RestService} from '../../services/rest.service';
import {Router} from '@angular/router';
import {User} from '../../models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profileForm = new FormGroup(
    {
      name: new FormControl(),
      specialization: new FormControl(),
      studyYear: new FormControl(),
      frequency: new FormControl()
    }
  );

  constructor(private rest: RestService,
              private router: Router) {
  }

  ngOnInit() {
  }

  public send() {
    this.rest.modifyProfile(this.profileForm.getRawValue()).subscribe(
      data => console.log(data)
    );
  }
}
