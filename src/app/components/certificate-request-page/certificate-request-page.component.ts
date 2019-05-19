import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Certificate} from '../../models/certificate';
import {RestService} from '../../services/rest.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-certificate-request-page',
  templateUrl: './certificate-request-page.component.html',
  styleUrls: ['./certificate-request-page.component.scss']
})


export class CertificateRequestPageComponent implements OnInit {

  constructor(private rest: RestService,
              private router: Router) {
  }

  private certificate: Certificate;

  loginForm = new FormGroup(
    {
      mentions: new FormControl(),
      purpose: new FormControl(),
    }
  );

  ngOnInit() {
  }

  public send() {
    // console.log(this.loginForm.getRawValue());
    this.rest.addCertificate(this.loginForm.getRawValue()).subscribe(data => console.log(data));
    this.router.navigateByUrl('/certificates');
  }

}
